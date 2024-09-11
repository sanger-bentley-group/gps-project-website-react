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
          content: '### Background',
        },
        {
          type: 'md',
          content: 'The original SeroBA ([Epping et al 2018](https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000186)), available [here](https://github.com/sanger-pathogens/seroba), is no longer maintained. Therefore, we recommend using the [containerised fork](https://github.com/sanger-bentley-group/seroba) maintained by our group, which includes the latest database updates and bug fixes.',
        },
        {
          type: 'md',
          content: 'The following instructions are based on our containerised fork and the usage of Docker or Singularity.',
        },
        {
          type: 'md',
          content: '### Run *in silico* Serotyping on a Single Sample',
        },
        {
          type: 'md',
          content: '**Running with Docker**',
        },
        {
          type: 'md',
          content: '- Replace placeholder values (`/path/to/reads`, `read1_file_name`, `read2_file_name`, `output_folder_prefix`) in the command'
        },
        {
          type: 'code',
          content: ['docker run --rm -it -u $(id -u):$(id -g) -v /path/to/reads:/data sangerbentleygroup/seroba seroba runSerotyping /seroba/database /data/read1_file_name /data/read2_file_name /data/output_folder_prefix']
        },
        {
          type: 'md',
          content: '**Running with Singularity**',
        },
        {
          type: 'md',
          content: '- Replace placeholder values (`/path/to/reads`, `read1_file_name`, `read2_file_name`, `output_folder_prefix`) in the command'
        },
        {
          type: 'code',
          content: ['singularity exec --bind /path/to/reads:/data docker://sangerbentleygroup/seroba seroba runSerotyping /seroba/database /data/read1_file_name /data/read2_file_name /data/output_folder_prefix']
        },
        {
          type: 'md',
          content: '### Run *in silico* Serotyping on Multiple Samples',
        },
        {
          type: 'md',
          content: '**Running with Docker**',
        },
        {
          type: 'md',
          content: '1. Place all the read files into a single directory and then `cd` (change directory) into that directory'
        },
        {
          type: 'md',
          content: '2. Run SeroBA on all the samples using a for-loop'
        },
        {
          type: 'code',
          // eslint-disable-next-line
          content: ['for READ1 in *1.fastq.gz; do SAMPLE=${READ1%_1.fastq.gz}; docker run --rm -it -u $(id -u):$(id -g) -v $PWD:/data sangerbentleygroup/seroba seroba runSerotyping /seroba/database /data/${SAMPLE}_1.fastq.gz /data/${SAMPLE}_2.fastq.gz /data/${SAMPLE}_RESULT; done']
        },
        {
          type: 'md',
          content: '3. Run SeroBA summary function on the results'
        },
        {
          type: 'code',
          content: ['docker run --rm -it -u $(id -u):$(id -g) -v $PWD:/data sangerbentleygroup/seroba seroba summary /data/']
        },
        {
          type: 'md',
          content: '4. The summarised result is available as `summary.csv` in the directory'
        },
        {
          type: 'md',
          content: '**Running with Singularity**',
        },
        {
          type: 'md',
          content: '1. Place all the read files into a single directory and then `cd` (change directory) into that directory'
        },
        {
          type: 'md',
          content: '2. Run SeroBA on all the samples using a for-loop'
        },
        {
          type: 'code',
          // eslint-disable-next-line
          content: ['for READ1 in *1.fastq.gz; do SAMPLE=${READ1%_1.fastq.gz}; singularity exec --bind $PWD:/data docker://sangerbentleygroup/seroba seroba runSerotyping /seroba/database /data/${SAMPLE}_1.fastq.gz /data/${SAMPLE}_2.fastq.gz /data/${SAMPLE}_RESULT; done']
        },
        {
          type: 'md',
          content: '3. Run SeroBA summary function on the results'
        },
        {
          type: 'code',
          content: ['singularity exec --bind $PWD:/data docker://sangerbentleygroup/seroba seroba summary /data/']
        },
        {
          type: 'md',
          content: '4. The summarised result is available as `summary.csv` in the directory'
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
          content: '- GPSC235;9 is an exception. This lineage is a mixture of GPSC9 and GPSC235, but do not indicate the merging of GPSC9 and GPSC235 lineages based on current evidence.',
        },
      ]
    }
  ]
}

export default content