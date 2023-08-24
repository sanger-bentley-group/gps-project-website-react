const content = {
  title: 'Command Line Training',
  sections: [
    {
      subtitle: '*In silico* Serotyping',
      content: [
        {
          md: '### Installation',
        },
        {
          md: '1. Install SeroBA ([Epping et al 2018](https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000186)) as per [SeroBA Documentation](https://github.com/sanger-pathogens/seroba#installation)',
        },
        {
          md: '2. Clone the database from [https://github.com/sanger-pathogens/seroba.git](https://github.com/sanger-pathogens/seroba.git), then create KMC and ARIBA databases'
        },
        {
          code: ['git clone https://github.com/sanger-pathogens/seroba.git', '', '# Recommend <kmer size> = 71', 'seroba createDBs seroba/database <kmer size>']
        },
        {
          md: '### Files Required',
        },
        {
          md: '- Paired-end FASTQ files',
        },
        {
          md: '- SeroBA database containing KMC and ARIBA databases (created in Installation step 2)',
        },
        {
          md: '- Sample list (only for running on multiple samples)'
        },
        {
          md: '### Run *in silico* Serotyping',
        },
        {
          md: '**Single Sample**',
        },
        {
          md: '1. Run SeroBA on the sample',
        },
        {
          code: ['# <read1> and <read2> are the paired-end FASTQ files', 'seroba runSerotyping seroba/database <read1> <read2> <output folder prefix>']
        },
        {
          md: '**Multiple Samples**',
        },
        {
          md: '1. Save list of sample names as `samplelist.txt` with each name on a new line'
        },
        {
          md: '2. Run SeroBA on all samples listed in `samplelist.txt`',
        },
        {
          /* eslint-disable no-template-curly-in-string */
          code: ['while read -r SAMPLE; do seroba runSerotyping seroba/database "${SAMPLE}_1.fastq.gz" "${SAMPLE}_2.fastq.gz" "${SAMPLE}"; done < samplelist.txt'],
        },
        {
          md: '3. Summaries the output in one .tsv file (`summary.tsv`)'
        },
        {
          code: ['seroba summary ./'],
        },
      ]
    },
    {
      subtitle: 'GPSC Assignment',
      content: [
        {
          md: '### Installation',
        },
        {
          md: '1. Install PopPUNK as per instructions at [PopPUNK documentation](https://poppunk.readthedocs.io/en/latest/installation.html)',
        },
        {
          md: '2. Download [GPS reference database v6](https://gps-project.cog.sanger.ac.uk/GPS_v6.zip) and [GPS designation v6](https://www.pneumogen.net/gps/GPS_v6_external_clusters.csv)'
        },
        {
          md: '3. Unzip the downloaded GPS reference database v6'
        },
        {
          md: '### Files Required',
        },
        {
          md: '- `qfile.txt`: a 2-column tab-delimited file containing sample names and their assembly paths',
        },
        {
          md: '- `GPS_v6`: GPS reference database v6',
        },
        {
          md: '- `GPS_v6_external_clusters.csv`: GPS designation v6'
        },
        {
          md: '### Run GPSC Assignment',
        },
        {
          code: [
            '# (Optional) To increase speed, add: --threads <number of threads>',
            'poppunk_assign --db GPS_v6 --external-clustering GPS_v6_external_clusters.csv --query qfile.txt --output <output folder>'
          ]
        },
        {
          md: '### Outputs',
        },
        {
          md: '- `*_clusters.csv`: PopPUNK clusters with dataset specific nomenclature',
        },
        {
          md: '- `*_external_clusters.csv`: GPSC v6 scheme designations',
        },
        {
          md: '### Notes',
        },
        {
          md: '- **Novel Clusters are assigned NA** in the `*_external_clusters.csv` as they have not been defined in the dataset used to designate the GPSCs. Please email [globalpneumoseq@gmail.com](mailto:globalpneumoseq@gmail.com) to have novel clusters added to the database and a GPSC cluster name assigned after you have checked for low level contamination which may contribute to biased accessory distances.',
        },
        {
          md: '- Merged clusters: Unsampled diversity may represent missing variation linking two clusters. GPSCs are then merged. For example if GPSC23 and GPSC362 merged, the GPSC would be then reported as GPSC23, with a merge history of GPSC23;362.',
        },
      ]
    }
  ]
}

export default content