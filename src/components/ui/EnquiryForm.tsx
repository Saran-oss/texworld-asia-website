import { useState } from 'react'
import { ArrowRight, AlertCircle, CheckCircle2, Info } from 'lucide-react'

interface EnquiryFormProps {
  productOptions: string[]
}

interface FormState {
  fullName: string
  email: string
  company: string
  country: string
  productCategory: string
  quantity: string
  message: string
  consent: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  fullName: '',
  email: '',
  company: '',
  country: '',
  productCategory: '',
  quantity: '',
  message: '',
  consent: false,
}

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!values.country.trim()) errors.country = 'Please enter your country or market.'
  if (!values.productCategory) errors.productCategory = 'Please select a product category.'
  if (!values.message.trim()) errors.message = 'Please describe your requirements in a few lines.'
  else if (values.message.trim().length < 20) errors.message = 'Please add a little more detail (20 characters minimum).'
  if (!values.consent) errors.consent = 'Please confirm the privacy notice before submitting.'
  return errors
}

export default function EnquiryForm({ productOptions }: EnquiryFormProps) {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      setStatusMessage('Please correct the highlighted fields below.')
      const first = document.querySelector('[data-enquiry-field="true"]') as HTMLElement | null
      first?.focus()
      return
    }

    setStatus('submitting')
    setStatusMessage('Preparing your enquiry…')
    try {
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      setStatusMessage(
        'Thank you. Your enquiry has been recorded in the frontend. A backend email or CRM integration still needs to be configured before live submissions are delivered to Texworld Asia.'
      )
      setValues(initialState)
    } catch {
      setStatus('error')
      setStatusMessage('Submission could not be completed. Please send your enquiry directly by email instead.')
    }
  }

  const id = (name: string) => `enquiry-${name}`
  const err = (key: keyof FormState) => (errors[key] ? `${id(key)}-error` : undefined)

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="enquiry-status">
      <div id="enquiry-status" aria-live="polite" aria-atomic="true" className="min-h-[1.5em]">
        {statusMessage && (
          <div
            className={`inline-flex items-start gap-3 p-4 rounded-sm border ${
              status === 'success'
                ? 'bg-[#EEF6F1] border-[#CDE4D6] text-[#1F4A33]'
                : status === 'error'
                ? 'bg-[#FCEFEB] border-[#F5CDC6] text-[#6B2A21]'
                : status === 'submitting'
                ? 'bg-bg-alt border-border text-text-secondary'
                : 'bg-bg-alt border-border text-text-secondary'
            }`}
            role={status === 'success' || status === 'error' ? 'status' : undefined}
          >
            {status === 'success' && <CheckCircle2 size={20} className="shrink-0 text-success mt-0.5" strokeWidth={2} />}
            {status === 'error' && <AlertCircle size={20} className="shrink-0 text-error mt-0.5" strokeWidth={2} />}
            {status === 'submitting' && <Info size={20} className="shrink-0 text-text-muted mt-0.5" strokeWidth={2} />}
            <span className="text-sm leading-relaxed">{statusMessage}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="form-field">
          <label htmlFor={id('fullName')} className="form-label">Full name *</label>
          <input
            id={id('fullName')}
            data-enquiry-field
            type="text"
            autoComplete="name"
            className={`form-input ${errors.fullName ? 'form-input-error' : ''}`}
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={err('fullName')}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p id={`${id('fullName')}-error`} className="form-error">
              <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={id('email')} className="form-label">Business email *</label>
          <input
            id={id('email')}
            type="email"
            autoComplete="email"
            data-enquiry-field
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={err('email')}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id={`${id('email')}-error`} className="form-error">
              <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={id('company')} className="form-label">Company name *</label>
          <input
            id={id('company')}
            type="text"
            autoComplete="organization"
            data-enquiry-field
            className={`form-input ${errors.company ? 'form-input-error' : ''}`}
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={err('company')}
            placeholder="Your company"
          />
          {errors.company && (
            <p id={`${id('company')}-error`} className="form-error">
              <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
              {errors.company}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={id('country')} className="form-label">Country / market *</label>
          <input
            id={id('country')}
            type="text"
            data-enquiry-field
            className={`form-input ${errors.country ? 'form-input-error' : ''}`}
            value={values.country}
            onChange={(e) => update('country', e.target.value)}
            aria-invalid={!!errors.country}
            aria-describedby={err('country')}
            placeholder="e.g. United States, Germany, Canada"
          />
          {errors.country && (
            <p id={`${id('country')}-error`} className="form-error">
              <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
              {errors.country}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={id('productCategory')} className="form-label">Product category *</label>
          <select
            id={id('productCategory')}
            data-enquiry-field
            className={`form-select ${errors.productCategory ? 'form-input-error' : ''}`}
            value={values.productCategory}
            onChange={(e) => update('productCategory', e.target.value)}
            aria-invalid={!!errors.productCategory}
            aria-describedby={err('productCategory')}
          >
            <option value="">Select a category…</option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.productCategory && (
            <p id={`${id('productCategory')}-error`} className="form-error">
              <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
              {errors.productCategory}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor={id('quantity')} className="form-label">Approx. order quantity (optional)</label>
          <input
            id={id('quantity')}
            type="text"
            data-enquiry-field
            className="form-input"
            value={values.quantity}
            onChange={(e) => update('quantity', e.target.value)}
            placeholder="e.g. 5,000 units / 1 x 40-ft container"
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor={id('message')} className="form-label">Your requirements *</label>
        <textarea
          id={id('message')}
          data-enquiry-field
          rows={6}
          className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={err('message')}
          placeholder="Describe the product, quality, timing, compliance needs, and any other details we should know."
        />
        {errors.message && (
          <p id={`${id('message')}-error`} className="form-error">
            <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <label
          htmlFor={id('consent')}
          className="flex items-start gap-3 cursor-pointer select-none"
        >
          <input
            id={id('consent')}
            type="checkbox"
            data-enquiry-field
            className="mt-1 w-5 h-5 rounded-sm text-primary border-border focus:ring focus:ring-2 focus:ring-focus"
            checked={values.consent}
            onChange={(e) => update('consent', e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={err('consent')}
          />
          <span className="font-body text-text-secondary leading-relaxed">
            I confirm that the information provided may be used by Texworld Asia to respond to this enquiry, in line with the applicable privacy notice. *
          </span>
        </label>
        {errors.consent && (
          <p id={`${id('consent')}-error`} className="form-error mt-3">
            <AlertCircle size={15} className="shrink-0 mt-0.5" strokeWidth={2} />
            {errors.consent}
          </p>
        )}
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-disabled={status === 'submitting'}
          className="btn-primary w-full sm:w-auto disabled:opacity-80 disabled:cursor-not-allowed"
        >
          Submit enquiry
          <ArrowRight size={16} strokeWidth={2} />
        </button>
        <p className="font-body text-text-muted text-sm max-w-md">
          Or email directly to{' '}
          <a className="text-link" href="mailto:fayyaz@texworldasia.com">fayyaz@texworldasia.com</a>
          .
        </p>
      </div>
    </form>
  )
}
