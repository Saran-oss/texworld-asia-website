import type { ProductCategory, ServiceItem, ProcessStep, BrandItem, CompanyInfo, WhyChooseUsItem } from '../types'

export const company: CompanyInfo = {
  name: 'Texworld Asia',
  tagline: 'Your sourcing partner in Pakistan for textile product development, order execution, and quality assurance.',
  ceoName: 'Fayyaz Khan',
  address: '1st Floor, H-15 Commercial Plaza, Wapda City, Faisalabad, Punjab, Pakistan',
  email: 'fayyaz@texworldasia.com',
  phone: '+92 321 7073167',
  markets: ['United States', 'Canada', 'Europe'],
  policy: [
    'To prioritize customer satisfaction.',
    'To make sure the deliveries in accordance with the deadlines and in the desired amount.',
    'To make sure to produce on time and with high quality by using materials that do not harm the environment and human health.',
    'To train our Supplier continuously, to increase their knowledge and factory’s process development to meet the customer’s requirement.',
    'To provide a business environment and motivation where our Manufacturer and Customers can fulfill their requirement with pleasures.',
    'To continuously improve and develop the product and quality system, to ensure the supply of resources for this purpose, and to pay maximum attention to savings cost.',
    'To prevent the repetition of quality errors that occur in business production as soon as possible and to increase the quality in this way.',
    'To create and maintain a clean, organized and orderly working environment.',
    'Comply with applicable terms.',
  ],
}

export const productCategories: ProductCategory[] = [
  {
    id: 'bedding',
    name: 'Bedding',
    slug: 'bedding',
    description: 'Fashion bedding sets, sheets, duvet covers, pillowcases, and coordinated bedroom textiles.',
    imagePrompt: 'Naturally lit bed linen in soft ivory and sage tones, folded neatly on a linen background, close-up detail of cotton weave',
  },
  {
    id: 'towels',
    name: 'Towels & Terry',
    slug: 'towels',
    description: 'Towel ranges, bathrobes, bath mats, and institutional terry products in multiple weaves.',
    imagePrompt: 'Folded cotton terry towels in warm neutral colors, natural daylight, soft linen surface, detail of terry loop texture',
  },
  {
    id: 'curtains',
    name: 'Window Curtains',
    slug: 'curtains',
    description: 'Curtain panels, drapes, shower curtains, and coordinated window treatments.',
    imagePrompt: 'Hanging woven cotton curtains in natural light, warm beige fabric texture, soft pleats, linen background',
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Table Linen',
    slug: 'kitchen',
    description: 'Kitchen towels, napkins, tablecloths, runners, and placemats across weaves and finishes.',
    imagePrompt: 'Folded linen kitchen towels and napkins on a wooden table, natural daylight, woven cotton detail, warm tones',
  },
  {
    id: 'socks',
    name: 'Socks',
    slug: 'socks',
    description: 'Everyday, athletic, and specialist sock ranges across sizes, fibers, and patterns.',
    imagePrompt: 'Folded cotton socks in natural neutral tones, linen backdrop, macro detail of knitting texture, daylight',
  },
  {
    id: 'healthcare',
    name: 'Health Care Textiles',
    slug: 'healthcare',
    description: 'Institutional and health-care linen, scrub textiles, and related sewn products.',
    imagePrompt: 'Neatly folded soft cotton institutional linens on a pale surface, natural lighting, plain weave detail',
  },
  {
    id: 'apparel',
    name: 'Apparels',
    slug: 'apparel',
    description: 'Garment ranges and sewn apparel programs, coordinated through fabric to finish.',
    imagePrompt: 'Hanging cotton garments in neutral tones on a rail, soft daylight, linen background, fabric drape detail',
  },
  {
    id: 'institutional',
    name: 'Institutional Home Textiles',
    slug: 'institutional',
    description: 'Bulk institutional and hospitality textile programs for hotels, hospitals, and long-term facilities.',
    imagePrompt: 'Stacked crisp white cotton sheets and pillowcases, linen background, hotel-quality institutional textile, soft daylight',
  },
]

export const services: ServiceItem[] = [
  {
    id: 'sourcing',
    name: 'Textile Sourcing',
    slug: 'sourcing',
    summary: 'Identify and vet the right manufacturers for each program.',
    description: 'Textile sourcing typically requires extensive knowledge and experience in the textile industry. We identify potential suppliers, negotiate prices and terms, and manage the entire procurement process from start to finish to care for your business for visible growth.',
    value: 'Access to a vetted supplier network across Pakistan, with competitive pricing and reliable lead times.',
  },
  {
    id: 'product-development',
    name: 'Product Development',
    slug: 'product-development',
    summary: 'Turn concepts into samples and ready-to-produce specifications.',
    description: 'We turn your concepts into market-ready samples and bulk production. From design to raw material selection to final specs — we manage every step so you get exactly what you need. Whether it\'s a new collection or a custom order, we bring your vision to life.',
    value: 'Full product-development support from fiber to finished product, including sampling, lab dips, and approvals.',
  },
  {
    id: 'order-execution',
    name: 'Order Execution',
    slug: 'order-execution',
    summary: 'End-to-end purchase-order management through to shipment.',
    description: 'From purchase order to final shipment — we handle documentation, production follow-up, quality checks, and logistics coordination. Your order delivered on time, every time. End-to-end execution with complete transparency — so you\'re never left guessing.',
    value: 'Transparent production follow-up, documentation support, and logistics coordination through to port.',
  },
  {
    id: 'factory-compliance',
    name: 'Factory Compliance',
    slug: 'factory-compliance',
    summary: 'Audit and verify factories against international standards.',
    description: 'We audit factories against international social, ethical, and quality standards. Know exactly who you\'re working with before you place your first order. Full compliance reports — so you can source with confidence.',
    value: 'Independent compliance assessments aligned with buyer and international standards, with documented reports.',
  },
  {
    id: 'inspection',
    name: 'Third-Party Inspection',
    slug: 'inspection',
    summary: 'Independent inspection at every stage of production.',
    description: 'Textile inspection is a critical process that involves examining textiles or fabrics for any defects or flaws that may affect their quality, functionality, or durability. The inspection process is usually carried out at different stages: raw material, pre-production, pre-cut, in-line, and final inspection.',
    value: 'Stage-gated quality oversight with documented findings, giving you confidence before each shipment.',
  },
  {
    id: 'brand-development',
    name: 'Brand Development',
    slug: 'brand-development',
    summary: 'Support importers and retailers build their textile brand programs.',
    description: 'Texworld Asia is a reliable name in sourcing, product/business development, execution, compliance and third-party inspections firm in Pakistan. We have been in this field for more than a decade. We deal in Home Textiles, Towels, Socks, Institutional home textiles & Apparels. We have had the opportunity to develop various brands for different importers and retailers in the USA market.',
    value: 'From range architecture to product execution, we support a brand program from concept through to delivery.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Requirements Discovery',
    description: 'We start with a detailed conversation about your product, quality, quantity, timing, and compliance requirements to understand the full scope of the program.',
  },
  {
    id: 'sourcing-dev',
    number: '02',
    title: 'Sourcing & Product Development',
    description: 'We identify the right manufacturing partners, develop samples, secure lab dips, refine specifications, and confirm commercial terms before you commit to production.',
  },
  {
    id: 'production-oversight',
    number: '03',
    title: 'Production Coordination & Quality Oversight',
    description: 'Once production begins, we follow each order stage by stage — conducting in-process checks, compliance audits, and final inspections so issues are resolved early.',
  },
  {
    id: 'execution',
    number: '04',
    title: 'Order Execution & Follow-Up',
    description: 'We coordinate the final documentation, packing, quality sign-off, and logistics handover so your shipment is ready on time and you have full visibility until the goods leave port.',
  },
]

export const brands: BrandItem[] = [
  { id: 'creative-bath', name: 'Creative Bath', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'dainty-home', name: 'Dainty Home', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'dkny', name: 'DKNY', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'dollar-general', name: 'Dollar General', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'hello-kitty', name: 'Hello Kitty', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'ellis', name: 'Ellis', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'kathy-davis', name: 'Kathy Davis', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
  { id: 'mainstays', name: 'Mainstays', category: 'customer', note: 'Brand program developed for USA importer/retailer.' },
]

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: 'network',
    title: 'Vast Network of Suppliers',
    description: 'We have built strong relationships with suppliers across Pakistan, giving our clients access to a wide range of fabrics, home-textile made-ups, apparels, socks, and other textile products at competitive prices.',
  },
  {
    id: 'team',
    title: 'Experienced & Professional Team',
    description: 'Our sourcing and quality-control team works closely with suppliers to ensure the fabrics and products sourced meet our customers\' high standards, with lab testing for quality and compliance with international standards.',
  },
  {
    id: 'flexible',
    title: 'Flexible and Responsive',
    description: 'We are committed to adapting our sourcing strategies to meet the needs of our customers. We respond and act quickly to changes in demand, so you can be sure that you will receive your textiles on time and in the quantities you need.',
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Services',
    description: 'Under one roof we provide market intelligence and research, SWOT analysis of regional markets, and complete textile solutions from fiber to finished product — across multiple product ranges.',
  },
]

export const inspectionStages: { id: string; title: string; description: string }[] = [
  {
    id: 'raw-material',
    title: 'Raw Material Inspection',
    description: 'Examining the quality of raw materials such as yarns, fibers, fabrics, stitching, and packaging material that will be used in bulk production. Checks include texture, color, strength, and consistency against required standards.',
  },
  {
    id: 'pre-production',
    title: 'Pre-Production Inspection',
    description: 'Checking the design, patterns, and specifications of the textile products before the production process begins. Helps identify any errors or deviations from the intended product design, which can be corrected before production.',
  },
  {
    id: 'pre-cut',
    title: 'Pre-Cut Inspection',
    description: 'In-process quality review during the early production phase. Checks for printing, uneven dyeing, technical errors, fabric defects, and packaging quality parameters.',
  },
  {
    id: 'in-line',
    title: 'In-Line Inspection',
    description: 'Inspecting products or materials during the manufacturing process, rather than after production is completed. An important quality-control measure that helps detect and correct defects or errors of stitching and packaging before they become more difficult or costly to address.',
  },
  {
    id: 'final',
    title: 'Final Inspection',
    description: 'Examining finished products to ensure they meet the required standards. Includes checking the size, shape, color, design, and quality of the products before they are packaged and shipped to customers.',
  },
]
