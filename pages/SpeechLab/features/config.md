Here is an example of configuration file for the MFCC features.

```toml
# SPDX-License-Identifier: MIT
#
# Lucas Ondel, LISN 2021
#

# Where you have prepare you datasets.
[dataset]
dir = "</path/to/datasets/>"
name = "<dataset>"

# Features specific configuration.
[features]

# Make sure the output directory is on disk with large memory.
dir = "</path/to/features/>"

# Standard MFCC features.
name = "mfcc"
lowfreq = 20
highfreq = 7600
numfilters = 26
nceps = 13
liftering = 22
deltaorder = 2

# High-resolution MFCC features (for end-to-end models for instance).
#name = "mfcc_hires"
#lowfreq = 20
#highfreq = 7600
#numfilters = 40
#nceps = 40
#liftering = 0 # No liftering.
#deltaorder = 0 # No delta coefficients.
```

