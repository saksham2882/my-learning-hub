"use client"

import React from 'react'

type ErrorPageProps = {
    error: Error
}

const ErrorPageProps = ({ error }: ErrorPageProps) => {
    return (
        <div>
            {error.message}
        </div>
    )
}

export default ErrorPageProps
