import BlogContent from '@/components/blog/layout/Content'
import BlogFooter from '@/components/blog/layout/Footer'
import BlogHeader from '@/components/blog/layout/Header'
import React from 'react'

function BlogPage() {
    return (
        <>
            <BlogHeader />
            <BlogContent />
            <BlogFooter />
        </>
    )
}

export default BlogPage