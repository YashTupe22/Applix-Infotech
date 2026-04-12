/** Shared inline SVGs — stroke inherits currentColor for theme-aware icons */

export function IconCustomWeb({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
                d="M8 16l2.5-2.5M14 14l2 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

export function IconSaaS({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
                d="M6 16a4 4 0 018 0M4 10a8 8 0 0116 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M12 4v2M12 18v2M4 12h2M18 12h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}

export function IconAutomation({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
                d="M12 4v4M12 16v4M4 12h4M16 12h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function IconContent({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
                d="M7 4h10a2 2 0 012 2v14l-4-3-4 3-4-3-4 3V6a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function IconPerformance({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
                d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function IconProductUX({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function IconScalable({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 18V6M4 18h16M4 18l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14V10M12 14V8M16 14V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function IconAlignment({ className = 'w-8 h-8' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

const SERVICE_ICONS = {
    'custom-web-apps': IconCustomWeb,
    'saas-development': IconSaaS,
    'business-automation': IconAutomation,
    'content-systems': IconContent,
}

export function ServiceIcon({ slug, className = 'w-8 h-8 text-electric' }) {
    const Cmp = SERVICE_ICONS[slug] || IconCustomWeb
    return <Cmp className={className} />
}

const WHY_ICONS = [IconPerformance, IconProductUX, IconScalable, IconAlignment]

export function WhyChooseIcon({ index, className = 'w-8 h-8 text-electric' }) {
    const Cmp = WHY_ICONS[index % WHY_ICONS.length]
    return <Cmp className={className} />
}
