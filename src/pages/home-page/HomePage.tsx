import React from 'react'
import BannerPage from './Banner'
import Team from './Team'
import SetupProcess from './Process'
import RealEsateDeals from './RealEsateDeals'
import FeaturedProperties from './FeaturedProperties'
import DynamicTabs from './DynamicTabs'
import DiscoverSection from '@/components/home/DiscoverSection'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import RealEstateNews from '@/components/home/RealEstateNews'
import MapSections from '@/components/home/MapSections'
import LadnMap from './LadnMap'
import MapImageSlider from './MapImageSlider'
import Faq from './Faq'
import TrustedByExperts from './TrustedByExperts'

const HomePage = () => {
  return (
    <div>
      {/* top banner  */}
      <BannerPage />
      {/* Real Esate Deals */}
      <LadnMap />
      <MapImageSlider />
      <RealEsateDeals />
      <FeaturedProperties />
      <DynamicTabs />
      <DiscoverSection />
      <TestimonialSlider />
      <RealEstateNews />
      <MapSections />
      {/* member sections  */}
      <Team />
      {/* process  */}
      <SetupProcess />
      <Faq />
      <TrustedByExperts />
    </div>
  )
}

export default HomePage