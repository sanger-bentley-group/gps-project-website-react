const content = {
  title: 'Command Line Training',
  sections: [
    {
      subtitle: {
        content: '*In silico* Serotyping'
      },
      content: [
        {
          type: 'md',
          content: '### Installation',
        },
        {
          type: 'md',
          content: '1. Install SeroBA ([Epping et al 2018](https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000186)) as per [SeroBA Documentation](https://github.com/sanger-pathogens/seroba#installation)',
        },
        {
          type: 'md',
          content: '2. Clone the database from [https://github.com/sanger-pathogens/seroba.git](https://github.com/sanger-pathogens/seroba.git), then create KMC and ARIBA databases'
        },
        {
          type: 'code',
          content: ['git clone https://github.com/sanger-pathogens/seroba.git', '', '# Recommend <kmer size> = 71', 'seroba createDBs seroba/database <kmer size>']
        },
        {
          type: 'md',
          content: '### Files Required',
        },
        {
          type: 'md',
          content: '- Paired-end FASTQ files',
        },
        {
          type: 'md',
          content: '- SeroBA database containing KMC and ARIBA databases (created in Installation step 2)',
        },
        {
          type: 'md',
          content: '- Sample list (only for running on multiple samples)'
        },
        {
          type: 'md',
          content: '### Run *in silico* Serotyping',
        },
        {
          type: 'md',
          content: '**Single Sample**',
        },
        {
          type: 'md',
          content: '1. Run SeroBA on the sample',
        },
        {
          type: 'code',
          content: ['# <read1> and <read2> are the paired-end FASTQ files', 'seroba runSerotyping seroba/database <read1> <read2> <output folder prefix>']
        },
        {
          type: 'md',
          content: '**Multiple Samples**',
        },
        {
          type: 'md',
          content: '1. Save list of sample names as `samplelist.txt` with each name on a new line'
        },
        {
          type: 'md',
          content: '2. Run SeroBA on all samples listed in `samplelist.txt`',
        },
        {
          type: 'code',
          /* eslint-disable no-template-curly-in-string */
          content: ['while read -r SAMPLE; do seroba runSerotyping seroba/database "${SAMPLE}_1.fastq.gz" "${SAMPLE}_2.fastq.gz" "${SAMPLE}"; done < samplelist.txt'],
        },
        {
          type: 'md',
          content: '3. Summaries the output in one .tsv file (`summary.tsv`)'
        },
        {
          type: 'code',
          content: ['seroba summary ./'],
        },
      ]
    },
    {
      subtitle: {
        content: 'GPSC Assignment'
      },
      content: [
        {
          type: 'md',
          content: '### Installation',
        },
        {
          type: 'md',
          content: '1. Install the latest PopPUNK (v2.6.3 or later) as per instructions at [PopPUNK documentation](https://poppunk.readthedocs.io/en/latest/installation.html)',
        },
        {
          type: 'md',
          content: '2. Download PopPUNK GPS database v9 ([.zip](https://gps-project.cog.sanger.ac.uk/GPS_v9.zip) or [.tar.gz](https://gps-project.cog.sanger.ac.uk/GPS_v9.tar.gz)) (10GB) and [GPSC designation v9](https://gps-project.cog.sanger.ac.uk/GPS_v9_external_clusters.csv) (716 kB)'
        },
        {
          type: 'md',
          content: '3. Unzip the downloaded PopPUNK GPS database v9'
        },
        {
          type: 'md',
          content: '### Files Required',
        },
        {
          type: 'md',
          content: '- `qfile.txt`: a 2-column tab-delimited file containing sample names and their assembly paths',
        },
        {
          type: 'md',
          content: '- `GPS_v9`: PopPUNK GPS database v9',
        },
        {
          type: 'md',
          content: '- `GPS_v9_external_clusters.csv`: GPSC designation v9'
        },
        {
          type: 'md',
          content: '### Run GPSC Assignment',
        },
        {
          type: 'code',
          content: [
            '# (Optional) To increase speed, add: --threads <number of threads>',
            'poppunk_assign --db GPS_v9 --external-clustering GPS_v9_external_clusters.csv --query qfile.txt --output <output folder>'
          ]
        },
        {
          type: 'md',
          content: '### Outputs',
        },
        {
          type: 'md',
          content: '- `*_clusters.csv`: PopPUNK clusters with dataset specific nomenclature',
        },
        {
          type: 'md',
          content: '- `*_external_clusters.csv`: GPSC designation based on v9 scheme',
        },
        {
          type: 'md',
          content: '### Notes',
        },
        {
          type: 'md',
          content: '- **Novel Clusters are assigned NA** in the `*_external_clusters.csv` as they have not been defined in the dataset used to designate the GPSCs. Please email [gps@pneumogen.net](mailto:gps@pneumogen.net) to have novel clusters added to the database and a GPSC cluster name assigned after you have checked for low level contamination which may contribute to biased accessory distances.',
        },
        {
          type: 'md',
          content: '- Merged clusters: Unsampled diversity may represent missing variation linking two clusters. GPSCs are then merged. For example if GPSC23 and GPSC362 merged, the GPSC would be then reported as the smaller GPSC value (i.e. GPSC23), with a merge history of GPSC23;362.',
        },
        {
          type: 'md',
          content: '- GPSC235;9 is an exception. This lineage is a mixture of GPSC9 and GPSC235, but do not indicate the merging of GPSC9 and GPSC235 lineages.',
        },
      ]
    }
  ]
}

export default content