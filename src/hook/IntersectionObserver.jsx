import React, { useEffect, useRef } from 'react'

export const VisibilityObserver = ({ onVisibleChange, obj }) => {
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            onVisibleChange(entry.isIntersecting)
        })

        observer.observe(elementRef.current)

        return () => {
            observer.unobserve(elementRef.current)
        }
    }, [onVisibleChange])
    return <div ref={elementRef}>{obj()}</div>
}