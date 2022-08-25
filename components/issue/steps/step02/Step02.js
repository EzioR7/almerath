/* Children Select */
import { useState } from 'react'
import { useUpdateIssue, useIssue } from 'context/Issue'
import { useNextStep } from 'context/Steps'
import { Grid, FormLabel } from '@mui/material'
import { SonsSelect, DaughtersSelect, GrandsonsSelect, GranddaughtersSelect, GrandGrandsonsSelect, GrandGranddaughtersSelect } from './index'
import NextStepButton from '../../NextStepButton'

function Step02() {

  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue()
  const issueData = useIssue()

  // Use next step context
  const goNextStep = useNextStep()

  // State
  const [sons, setSons] = useState(0)
  const [daughters, setDaughters] = useState(0)
  const [grandsons, setGrandsons] = useState(0)
  const [granddaughters, setGranddaughters] = useState(0)
  const [grandGrandsons, setGrandGrandsons] = useState(0)
  const [grandGranddaughters, setGrandGranddaughters] = useState(0)

  // State Change from children
  const sonsChange = (val) => {
    setSons(val)
  }

  const daughtersChange = (val) => {
    setDaughters(val)
  }

  const grandsonsChange = (val) => {
    setGrandsons(val)
  }

  const granddaughtersChange = (val) => {
    setGranddaughters(val)
  }

  const grandGrandsonsChange = (val) => {
    setGrandGrandsons(val)
  }

  const grandGranddaughtersChange = (val) => {
    setGrandGranddaughters(val)
  }

  // Handle Next Step Button
  const nextStep = () => {

   if (sons > 0 && daughters > 0) {
    // Has Sons with Daughters
    maleAndFemale('الأبناء', sons, 'البنات', daughters)
   }
   
   if (sons > 0 && daughters == 0) {
    // Has Only Sons
    maleLeagueOnly('الأبناء', sons)

   }

   if (daughters > 0 && sons == 0) {
    // Has only Daughters without Sons
    if (daughters == 1) {
      // Only One Daughters
      oneFemaleOnly('البنات')
    }

    if (daughters >= 2) {
      // Two or More Daughters
      twoAndMoreFemale('البنات', daughters)
    }
   }

   if (grandsons > 0 && granddaughters > 0) {
    // Has Grandsons with Granddaughters
    maleAndFemale('أبناء الأبناء', grandsons, 'بنات الأبناء', granddaughters)

   }
   
   if (grandsons > 0 && granddaughters == 0) {
    // Has Only Grandsons
    maleLeagueOnly('أبناء الأبناء', grandsons)

   }

   if (granddaughters > 0 && grandsons == 0) {
      // Has only GrandDaughters without Grandsons
      if (granddaughters == 1 && daughters == 0) {
        // Only One grandDaughters
        oneFemaleOnly('بنات الأبناء')

      }

      if (granddaughters >= 2 && daughters == 0 ) {
        // Two or More Granddaughters
        twoAndMoreFemale('بنات الأبناء', granddaughters)
      }
      
      if(granddaughters > 0 && daughters == 1){
        // Has Granddaughters with one Daughter
        femaleWithOneGreaterFemale('بنات الأبناء', granddaughters)
      }
    }

    if (grandGrandsons > 0 && grandGranddaughters > 0) {
      // Has GrandGrandsons with GrandGranddaughters
      maleAndFemale('أبناء أبناء الأبناء', grandGrandsons, 'بنات أبناء الأبناء', grandGranddaughters)
  
     }
     
     if (grandGrandsons > 0 && grandGranddaughters == 0) {
      // Has Only GrandGrandsons
      maleLeagueOnly('أبناء أبناء الأبناء', grandGrandsons)
  
     }
  
     if (grandGranddaughters > 0 && grandGrandsons == 0) {
        // Has only GrandGrandDaughters without GrandGrandsons
        if (grandGranddaughters == 1 && daughters == 0 && granddaughters == 0) {
          // Only One grandGrandDaughters
          oneFemaleOnly('بنات أبناء الأبناء')
  
        }
  
        if (grandGranddaughters >= 2 && daughters == 0 && granddaughters == 0 ) {
          // Two or More GrandGranddaughters
          twoAndMoreFemale('بنات أبناء الأبناء', grandGranddaughters)
        }
        
        if(granddaughters > 0 && (daughters + granddaughters == 1)){
          // Has GrandGranddaughters with one Daughter or Granddaughter
          femaleWithOneGreaterFemale('بنات أبناء الأبناء', grandGranddaughters)
        }
      }
    goNextStep()
    
  }

  // Helper Functions
  const maleAndFemale = (titleM, countM, titleF, countF) => {
    const data = {
      inherits: {
        league: [
          {
            title: titleM,
            count: countM,
            proof: 'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11'
          },
          {
            title: titleF,
            count: countF,
            proof: 'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11'
          }
        ]
      },
      hasChild: true,
      hasSons: true
    }

    updateIssue(data)
  }

  const maleLeagueOnly = (title, count) => {
    const data = {
      inherits: {
        league: [
          {
            title: title,
            count: count,
            proof: 'عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.'
          }
        ]
      },
      hasChild: true,
      hasSons: true
    }

    updateIssue(data)
  }

  const oneFemaleOnly = (title) => {
    const data = {
      inherits: {
        fard: [
          {
            title: title,
            count: 1,
            cut: 'النصف',
            stocks: 12,
            earn: (issueData.amount * 12) / 24,
            proof: 'قالَ عزَّ و جلَّ: " ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.' 
          }
        ]
      },
      hasChild: true
    }

    updateIssue(data)
  }

  const twoAndMoreFemale = (title, count) => {
    const data = {
      inherits: {
        fard: [
          {
            title: title,
            count: count,
            cut: 'الثلثين',
            stocks: 16,
            earn: (issueData.amount * 16) / 24,
            proof: 'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.'
          }
        ]
      }
    }

    updateIssue(data)
  }

  const femaleWithOneGreaterFemale = (title, count) => {
    const data = {
      inherits: {
        fard: [
          {
            title: title,
            count: count,
            cut: 'السدس تكملة الثلثين نصيب الإناث',
            stocks: 4,
            earn: (issueData.amount * 4) / 24,
            proof: 'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏ ‏‏‏‏" سورة النساء آية رقم 11.'
          }
        ]
      }
    }

    updateIssue(data)
  }

  return (
    <>
      <FormLabel sx={{py: '1.5rem'}}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <SonsSelect sons={sons} grandsons={grandsons} grandGrandsons={grandGrandsons} granddaughters={granddaughters} sonsChange={sonsChange} />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <DaughtersSelect daughters={daughters} daughtersChange={daughtersChange} />
        </Grid>
      </Grid>
      <Grid container mt={4} rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <GrandsonsSelect grandsons={grandsons} sons={sons} grandGrandsons={grandGrandsons} grandsonsChange={grandsonsChange} />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <GranddaughtersSelect  granddaughters={granddaughters} sons={sons} daughters={daughters} grandsons={grandsons} granddaughtersChange={granddaughtersChange} />
        </Grid>
      </Grid>
      <Grid container mt={4} rowSpacing={3} columnSpacing={3}>
        <Grid item md={3} sm={4} xs={10}>
          <GrandGrandsonsSelect grandGrandsons={grandGrandsons} sons={sons} grandsons={grandsons} grandGrandsonsChange={grandGrandsonsChange} />
        </Grid>
        <Grid item md={3} sm={4} xs={10}>
          <GrandGranddaughtersSelect grandGranddaughters={grandGranddaughters} grandGrandsons={grandGrandsons} sons={sons} granddaughters={granddaughters} grandsons={grandsons} grandGranddaughtersChange={grandGranddaughtersChange} />
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  )
}

export default Step02