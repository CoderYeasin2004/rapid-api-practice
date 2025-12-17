import React from 'react'
import { baseUrl, fetchAPI } from '@/utils/fetchApi'

const Property = async () => {
    const properties = await fetchAPI(`${baseUrl}/agents/v2/listings?fulfillmentId=3155600&limit=5`)
  
    
    const listings = [properties.data]

    return (
        <div>
            {listings.length > 0 ? (
                listings.map((property: any, index: number) => (
                    <div key={index}>
                        {property?.home_search?.results?.length > 0 ? (
                            property.home_search.results.map((home: any, homeIndex: number) => (
                                <img width={700} height={700}  key={homeIndex} src={home?.photos?.[0]?.href ?? 'No photo'} alt="" />
                            ))
                        ) : (
                            <p>No results for this property</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No properties found</p>
            )}
        </div>
    )
}

export default Property