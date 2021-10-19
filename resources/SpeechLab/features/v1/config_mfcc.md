---
permalink: /resources/SpeechLab/features/v1/config_mfcc
layout: config
```
# SPDX-License-Identifier: MIT
#
# Lucas Ondel, LISN 2021
#
# This is an example of configuration file for the MFCC features.

# Where you have prepare you datasets.
[dataset]

# We assume the following to find the files:
#   dataset.dir/dataset.name/{dataset.subsets...}/{wav.scp,utt2spk}
dir = "</path/to/datasets/>"
name = "<dataset>"
subsets = ["<train>", "<dev>", "<test>"]

# Features specific configuration.
[features]

# Make sure the output directory is on a disk with large memory.
dir = "</path/to/features/>"

# In the following, we assume 16kHz input signal. For different
# sampling rate, remember to adjust the "highfreq" option accordingly.

# Standard MFCC features.
name = "mfcc"
lowfreq = 20
highfreq = 7600
numfilters = 26
nceps = 13
liftering = 22
deltaorder = 2
mean_norm = true
var_norm = false

# NOTE: if 'var_norm' is true, then 'mean_norm' is forced to true
# automatically.

# High-resolution MFCC features (e.g. for end-to-end models).
#name = "mfcc_hires"
#lowfreq = 20
#highfreq = 7600
#numfilters = 40
#nceps = 40
#liftering = 0 # No liftering.
#deltaorder = 0 # No delta coefficients.
#mean_norm = true
#var_norm = true
```
