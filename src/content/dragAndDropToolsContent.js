const content = {
  title: "Drag and Drop Tools",
  sections: [
    {
      content: [
        {
          type: 'md',
          content: 'Below are tutorial videos to illustrate how to use web-based tools to perform bioinformatic analysis and to visualise analysed data.',
        },
      ]
    },
    {
      content: [
        {
          type: 'logo',
          content: {
            logo: 'pathogenwatch_logo.svg',
            url: 'https://pathogen.watch/genomes/all?genusId=1301&speciesId=1313',
            alt: 'Click to access Pathogenwatch website'
          }
        },
        {
          type: 'md',
          content: '*In silico serotype, GPSC, MLST and antibiotic resistance*'
        },
        {
          type: 'youtube',
          content: {
            title: 'Pathogenwatch for Streptococcus pneumoniae',
            id: 'Q8bDuZZ3hXg'
          }
        },
        {
          type: 'button',
          content: {
            text: 'Download Example Assemblies',
            url: 'res/example-assemblies.zip',
          }
        },
      ]
    },
    {
      content: [
        {
          type: 'logo',
          content: {
            logo: 'microreact_logo.svg',
            url: 'https://microreact.org/',
            alt: 'Click to access Microreact website'
          }
        },
        {
          type: 'md',
          content: '*Visualisation of phylogeny with temporal and spatial metadata*'
        },
        {
          type: 'md',
          content: '[Microreact Introduction](https://vimeo.com/393391441) from [Genomic Pathogen Surveillance](https://vimeo.com/cgps) on Vimeo'
        },
        {
          type: 'vimeo',
          content: {
            title: 'Pathogenwatch for Streptococcus pneumoniae',
            id: '393391441'
          }
        },
        {
          type: 'button',
          content: {
            text: 'Download Example Data',
            url: 'res/microreact-examples.zip',
          }
        },
      ]
    },
    {
      content: [
        {
          type: 'logo',
          content: {
            logo: 'phandango_logo.png',
            url: 'https://jameshadfield.github.io/phandango/#/gps',
            alt: 'Click to access phandango website'
          }
        },
        {
          type: 'md',
          content: '*Visualisation of recombination and pangenome analysis*'
        },
        {
          type: 'youtube',
          content: {
            title: 'Phandango',
            id: 'pGgtt2z8sUI'
          }
        },
        {
          type: 'button',
          content: {
            text: 'Download Example Recombination Data',
            url: 'res/recombination-examples.zip',
          }
        },
        {
          type: 'button',
          content: {
            text: 'Download Pan Genome Data',
            url: 'res/pangenome-examples.zip',
          }
        },
      ]
    },
  ]
}

export default content
