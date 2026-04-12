export const SAAS_URL = 'https://saas.synplixinfotech.in/'

/** @typedef {{ slug: string, title: string, shortDescription: string, tag: string, link?: string, linkLabel?: string, intro: string, highlights: string[], deliverables: string[], stack: string[] }} ServiceDefinition */

/** @type {ServiceDefinition[]} */
export const SERVICES = [
    {
        slug: 'custom-web-apps',
        title: 'Custom web applications',
        shortDescription:
            'Full-stack web products designed for long-term maintainability, speed, and conversion.',
        tag: 'React · Next.js · Node.js',
        intro:
            'We design and ship web applications that stay fast to change as your business evolves—from first launch to years of iteration. Architecture, UX, and delivery are planned together so you are not rebuilding the same product every twelve months.',
        highlights: [
            'Product discovery and technical scoping tied to measurable outcomes',
            'Design systems and component libraries for consistent UI at scale',
            'APIs, auth, and data layers structured for reliability and observability',
            'Performance budgets, caching, and deployment pipelines from day one',
        ],
        deliverables: [
            'Roadmap and architecture document',
            'UI kit and responsive screens',
            'Production codebase with tests and CI',
            'Handover docs and knowledge transfer',
        ],
        stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
        slug: 'saas-development',
        title: 'SaaS development',
        shortDescription:
            'Multi-tenant SaaS systems with billing, authentication, analytics, and admin tooling.',
        tag: 'Stripe · Auth · PostgreSQL',
        link: SAAS_URL,
        linkLabel: 'Try our SaaS',
        intro:
            'We build multi-tenant SaaS products with clear isolation, billing that matches your pricing model, and admin tooling your team can run without engineering fire drills.',
        highlights: [
            'Tenant model, roles, and security boundaries designed for your domain',
            'Subscriptions, usage metering, and invoicing with Stripe (or your stack)',
            'Analytics and audit trails operators can trust',
            'Admin dashboards for support, billing, and configuration',
        ],
        deliverables: [
            'Tenant and billing design',
            'Customer app and admin console',
            'Integration guides for SSO and webhooks',
            'Runbooks for common operational tasks',
        ],
        stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Auth', 'AWS'],
    },
    {
        slug: 'business-automation',
        title: 'Business automation',
        shortDescription:
            'Operational workflows and integrations that reduce manual work across your internal stack.',
        tag: 'APIs · Webhooks · Process automation',
        intro:
            'We connect your tools and automate repeatable work—approvals, sync jobs, notifications, and reporting—so teams spend time on decisions, not copy-paste.',
        highlights: [
            'Map of systems, data flows, and failure modes before we build',
            'Idempotent jobs, retries, and alerting for operational safety',
            'Webhooks, queues, and APIs that match how your vendors behave',
            'Dashboards or Slack/email signals when something needs attention',
        ],
        deliverables: [
            'Integration architecture and SLAs',
            'Automation workflows with monitoring',
            'Documentation for IT and business users',
            'Handover with runbooks and escalation paths',
        ],
        stack: ['Node.js', 'REST & webhooks', 'Queues', 'PostgreSQL'],
    },
    {
        slug: 'content-systems',
        title: 'Content systems',
        shortDescription:
            'Structured content and growth-ready digital assets that support product and marketing teams.',
        tag: 'SEO · Copywriting · Content ops',
        intro:
            'We help you structure content so marketing and product stay aligned—editorial workflows, SEO foundations, and assets that plug into your site and campaigns.',
        highlights: [
            'Content models and CMS setup that match how your team works',
            'SEO-ready pages, metadata, and internal linking patterns',
            'Copy and layouts tuned for clarity and conversion',
            'Lightweight ops: calendars, approvals, and reuse across channels',
        ],
        deliverables: [
            'Content strategy brief and IA',
            'CMS configuration and templates',
            'Page copy and component guidelines',
            'Publishing checklist and analytics hooks',
        ],
        stack: ['Next.js', 'Headless CMS', 'SEO', 'Analytics'],
    },
]

export function getServiceBySlug(slug) {
    return SERVICES.find((s) => s.slug === slug) ?? null
}
