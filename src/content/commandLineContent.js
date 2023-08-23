const content = {
  title: 'Command Line Training',
  sections: [
    {
      subtitle: '*In silico* Serotyping',
      content: [
        {
          text: '### Installation',
        },
        {
          text: '1. Install SeroBA ([Epping et al 2018](https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000186)) as per [SeroBA Documentation](https://github.com/sanger-pathogens/seroba#installation)',
        },
        {
          text: '2. Clone the database from [https://github.com/sanger-pathogens/seroba.git](https://github.com/sanger-pathogens/seroba.git), then create KMC and ARIBA databases'
        },
        {
          code: ['git clone https://github.com/sanger-pathogens/seroba.git', '', '# Recommend <kmer size> = 71', 'seroba createDBs seroba/database <kmer size>']
        },
        {
          text: '### Files Required',
        },
        {
          text: '- Paired-end FASTQ files',
        },
        {
          text: '- SeroBA database containing KMC and ARIBA databases (created in Installation step 2)',
        },
        {
          text: '- Sample list (only for running on multiple samples)'
        },
        {
          text: '### Run *in silico* Serotyping',
        },
        {
          text: '**Single sample**',
        },
        {
          text: '1. Run SeroBA on the sample',
        },
        {
          code: ['# <read1> and <read2> are the paired-end FASTQ files', 'seroba runSerotyping seroba/database <read1> <read2> <output folder prefix>']
        },
        {
          text: '**Multiple samples**',
        },
        {
          text: '1. Save list of sample names as `samplelist.txt`'
        },
        {
          text: '2. Run SeroBA on all samples listed in `samplelist.txt`',
        },
        {
          code: ['for f in $(cat samplelist.txt); do seroba runSerotyping seroba/database ${f}_1.fastq.gz ${f}_2.fastq.gz ${f}; done'],
        },
        {
          text: '3. Summaries the output in one .tsv file (`summary.tsv`)'
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
          text: '### Installation',
        },
        {
          text: '1. Install PopPUNK as per instructions at [PopPUNK documentation](https://poppunk.readthedocs.io/en/latest/installation.html)',
        },
        {
          text: '2. Download [GPS reference database v6](https://gps-project.cog.sanger.ac.uk/GPS_v6.zip) and [GPS designation v6](https://www.pneumogen.net/gps/GPS_v6_external_clusters.csv)'
        },
        {
          text: '3. Unzip the downloaded GPS reference database v6'
        },
        {
          text: '### Files Required',
        },
        {
          text: '- `qfile.txt`: a 2-column tab-delimited file containing sample names and paths to the corresponding assembly',
        },
        {
          text: '- GPS reference database v6 (`GPS_v6`)',
        },
        {
          text: '- GPS designation v6 (`GPS_v6_external_clusters.csv`)'
        },
        {
          text: '### Run GPSC Assignment',
        },
        {
          code: [
            '# (Optional) To increase speed, add: --threads <number of threads>',
            'poppunk_assign --db GPS_v6 --external-clustering GPS_v6_external_clusters.csv --query qfile.txt --output <output folder>'
          ]
        },
        {
          text: '### Outputs',
        },
        {
          text: '- `*_clusters.csv`: PopPUNK clusters with dataset specific nomenclature',
        },
        {
          text: '- `*_external_clusters.csv`: GPSC v6 scheme designations',
        },
        {
          text: '### Notes',
        },
        {
          text: '- **Novel Clusters are assigned NA** in the `*_external_clusters.csv` as they have not been defined in the dataset used to designate the GPSCs. Please email [globalpneumoseq@gmail.com](mailto:globalpneumoseq@gmail.com) to have novel clusters added to the database and a GPSC cluster name assigned after you have checked for low level contamination which may contribute to biased accessory distances.',
        },
        {
          text: '- Merged clusters: Unsampled diversity may represent missing variation linking two clusters. GPSCs are then merged. For example if GPSC23 and GPSC362 merged, the GPSC would be then reported as GPSC23, with a merge history of GPSC23;362.',
        },
      ]
    }
  ]
}

export default content