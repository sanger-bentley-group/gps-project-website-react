const content = {
  title: 'Project Outline',
  sections: [
    {
      subtitle: {
        content: 'Pneumococcal Disease'
      },
      content: [
        {
          type: 'md',
          content: '*Streptococcus pneumoniae* bacteria (also known as the pneumococcus) are the leading vaccine-preventable cause of pneumonia, septicaemia and meningitis in young children. In 2015, the pneumococcus was estimated to be responsible for about 9 million cases of disease, and over 317,000 deaths in children under five years of age, with the main burden in low- and middle-income countries ([Wahl 2018](https://doi.org/10.1016/S2214-109X(18)30247-X)).',
        },
        {
          type: 'imageHalfWidth',
          content: {
            assetName: 'streptococcus.jpg',
            alt: 'Image of Streptococcus pneumoniae'
          }
        },
        {
          type: 'md',
          content: '###### Computer-generated image of a group of *Streptococcus pneumoniae* (Image credit: CDC)'
        },
        {
          type: 'md',
          content: 'Pneumococcal conjugate vaccines (PCVs) target the protective capsule surrounding pneumococcal cells and have proven to be very effective in reducing pneumococcal disease since their first introduction in 2000. However, there are at least [100 different forms of capsule](../serobank), each giving rise to a distinct "serotype" determined based on interactions between antibodies and antigens on the capsule. Current PCVs only target some serotypes, and the overall pneumococcus population can evolve through a process known as "serotype switching" to evade the vaccines. This creates an arms race between the vaccines and the pneumococcus.'
        },
        {
          type: 'md',
          content: '![Current PCV formulations](PCV_formulation.png)'
        },
        {
          type: 'md',
          content: '###### The table above shows the serotypes covered by different pneumococcal vaccines. A blue block in the table indicates the serotype of its column is covered by that vaccine of its row. The shade of the colour represents how frequently that serotype is being covered across all vaccines. The darker the colour, the more frequently the serotype is being covered.'
        },
      ]
    },
    {
      subtitle: { 
        content: 'GPS'
      },
      content: [
        {
          type: 'md',
          content: 'The Global Pneumococcal Sequencing (GPS) project was set up to use whole genome sequencing to create a global picture of pneumococcal evolution in response to the introduction of vaccines. The information generated has enabled us to better understand how the pneumococcus makes its capsule, what happens during vaccine escape, and how we can use this information to improve the design of new vaccines.'
        },
        {
          type: 'md',
          content: "The GPS project was conceptualised by Professor Stephen Bentley at the Wellcome Sanger Institute, UK, and Professor Keith Klugman at Emory University, USA, over a pint in The Queen's Arms in Kensington, London in 2009, where they discussed the feasibility of sequencing the genomes of more than 20,000 pneumococcal bacteria collected from around the world."
        },
        {
          type: 'md',
          content: "Dr Lesley McGee from the US Centers for Disease Control and Prevention, an expert in pneumococcal microbiology and vastly experienced in large scale international studies, was brought on board as one of the project leaders. Strategic collaborations were also established with other experts including Dr Anne von Gottberg from the National Institute Communicable Diseases, South Africa; Professor Martin Antonio from the Medical Research Unit The Gambia at the London School of Hygiene & Tropical Medicine; and Professor Dean Everett from Malawi-Liverpool-Wellcome Trust Clinical Research Programme."
        },
        {
          type: 'md',
          content: 'When Keith took up a role as Head of the Pneumonia Program at the Bill & Melinda Gates Foundation, Professor Robert Breiman from Emory University joined us as a Principal Investigator. With financial support from the Gates Foundation, the Sanger Institute and the US Centers for Disease Control and Prevention, the GPS project was established in 2011.'
        },
        {
          type: 'md',
          content: 'By the end of 2019, the GPS project had sequenced >26,000 pneumococcal isolates from >50 countries, representing a global collaboration of almost 100 scientists from around the world.'
        },
        {
          type: 'md',
          content: 'GPS sequence data confirmed that after the introduction of vaccines, pneumococci with vaccine serotypes were replaced by those with non-vaccine serotypes. Importantly, with such large-scale genome data, we were able to classify all the strains circulating globally, for the first time. Pneumococcal strains could be defined at high-resolution by taking genome-wide DNA variations into account ([Gladstone and Lo *et al* 2019](https://doi.org/10.1016/j.ebiom.2019.04.021)). This robust typing method is coupled with a coherent and dynamic naming system known as [global pneumococcal sequence clusters (GPSCs)](../gpsc#lineages), which enable collaborations in the tracking of pneumococcal lineages across geographical regions and over time, especially before and after the roll-out of PCVs.'
        },
        {
          type: 'md',
          content: 'We were able to identify a subset of strains that are globally disseminated, many of which are associated with antibiotic resistance and composed of vaccine- and non-vaccine serotypes. We found that these strains have an important role in the arms race by driving the expansion of non-vaccine pneumococcal serotypes ([Lo and Gladstone *et al* 2019](https://doi.org/10.1016/S1473-3099(19)30297-X)).'
        },
        {
          type: 'md',
          content: 'The data also allowed us to unlock the genetic diversity of the capsule, discover nine new potential serotypes ([van Tonder *et al* 2019](https://doi.org/10.1099/mgen.0.000274)), and shed light on previously unrecognised antimicrobial resistance in pneumococcus ([Lo *et al* 2019](https://doi.org/10.1093/jac/dkz477)). For more findings, please browse our [Publications page](../publications).'
        },
      ]
    },
    {
      subtitle: { 
        content: 'Open Data and Findings'
      },
      content: [
        {
          type: 'md',
          content: 'The GPS project generates a rich source of genome and epidemiological data for tracking pneumococcal transmission and evolution on both national and international levels. The genome data are deposited in [ENA](https://www.ebi.ac.uk/ena/data/view/PRJEB3084). High-level analyses are interactively presented by [countries](../resources#countries) and by [strains](../gpsc#lineages) using [Microreact](https://microreact.org/) and [Phandango](https://jameshadfield.github.io/phandango/#/GPS). Illustrations of how to use these resources are summarised in a publication ([Gladstone *et al* 2020](https://doi.org/10.1099/mgen.0.000357)) and videos on the [Resources pages](../resources#overview). '
        },
      ]
    },
    {
      subtitle: {
        content: "GPS2 - the Next Chapter"
      },
      content: [
        {
          type: 'md',
          content: 'In 2020, the GPS project continued into its next chapter, obtaining further support from the [Bill & Melinda Gates Foundation](https://www.gatesfoundation.org/) to build on the success of the preceding 8 years of pneumococcal genomic surveillance but with an increased focus on:'
        },
        {
          type: 'md',
          content: '1. **Increasing geographical coverage** in countries, especially those with high disease burden, such as India, Nigeria, DR Congo and Pakistan, together these four countries accounted for approximately 50% of global pneumococcal disease burden in 2015.'
        },
        {
          type: 'md',
          content: '2. **Supporting local data generation and analysis** to achieve a working system for long-term and sustainable genomic surveillance in LMICs by providing capacity building and [bioinformatics training](https://training.bactgen.sanger.ac.uk/).'
        },
        {
          type: 'md',
          content: '3. **Engaging with policy makers** to communicate the value of the data and the importance of study findings for decision-making in pneumococcal disease prevention.'
        },
        {
          type: 'md',
          content: 'Success during the first phase of the GPS project also created opportunities to establish further strategic partnerships during GPS2 with:'
        },
        {
          type: 'md',
          content: '1. [SIREVA](https://redsirevanetwork.com/) to establish a framework for integrating whole-genome sequencing in the ongoing surveillance in Latin America.'
        },
        {
          type: 'md',
          content: "2. [Professor Moon Nahm's lab](https://www.vaccine.uab.edu/) at the University of Alabama to characterise capsule structure of the nine potential new serotypes."
        },
        {
          type: 'md',
          content: "3. [NHMRC Centre of Research Excellence for Pneumococcal Disease Control in the Asia-Pacific (CRE-PDC)](https://www.mcri.edu.au/research/strategic-collaborations/centres/centre-pneumococcal-disease-control-asia-pacific) at the Murdoch Children's Research Institute to understand the sustainability of national immunisation PCV programs in the Asia-Pacific region."
        }
      ]
    },
    {
      subtitle: { 
        content: "Related Links"
      },
      content: [
        {
          type: 'md',
          content: '- [The Story of GPS](https://sangerinstitute.blog/2019/06/12/tracking-a-deadly-shapeshifter)'
        },
        {
          type: 'md',
          content: '- [GPS Headline Findings](https://www.sanger.ac.uk/news_item/pneumonia-mapped-largest-genomic-survey-any-disease-causing-bacterium/)'
        },
        {
          type: 'md',
          content: '- [VIEW-hub: Reports on disease burden, vaccine access and coverage](https://view-hub.org/)'
        },
        {
          type: 'md',
          content: '- [Gavi: the Vaccine Alliance](https://www.gavi.org/)'
        },
      ]
    },
  ]
}

export default content