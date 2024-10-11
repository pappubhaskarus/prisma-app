import BakeriesContent from '@/components/bakeries/layout/Content'
import BakeriesFooter from '@/components/bakeries/layout/Footer'
import BakeriesHeader from '@/components/bakeries/layout/Header'
import React from 'react'

function BakeriesPage() {
    return (
        <>
            <BakeriesHeader />
            <BakeriesContent />
            <BakeriesFooter />
        </>
    )
}

export default BakeriesPage