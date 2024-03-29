---
permalink: /resources/SpeechLab/lfmmi/v1/config
layout: config
---
```
# SPDX-License-Identifier: MIT
#
# Lucas Ondel, LISN, 2021
#
# This is an example of configuration file for the the LF-MMI training.
# It is used for both steps: the graphs preparation and the actual
# training.

#######################################################################
# Where you have prepared the datasets (transcriptions, lexicon, ...).
#######################################################################
[dataset]

# We assume the following files to exist:
#   <dataset.dir>/<dataset.name>/{<dataset.train>,<dataset.dev>}/text
#   <dataset.dir>/<dataset.name>/lang/{lexicon,units}
dir = "</path/to/datasets>"
name = "wsj"
train = "train_si284"
dev = "test_dev93"
test = "test_eval92"

#######################################################################
# Global directory structure of the experiment.
#######################################################################
[experiment]

# The output of the training will be in:
#   <experiment.dir>/<dataset.name>/...
dir = "exp"

#######################################################################
# Where the features are extracted.
#######################################################################
[features]

# We assume the following files to exist:
#   <features.dir>/<dataset.name>/{<dataset.train>,<dataset.dev>,<dataset.test>}/<features.name>.h5
dir = "</path/to/features>"
name = "mfcc_hires_16kHz"

#######################################################################
# Options for the graphs generation.
#######################################################################
[graphs]

# Output directory (relative to the notebook path).
dir = "graphs"

# HMMs configuration (relative to the notebook path).
hmm_topologies = "topo_unit.toml"

# N-gram order of the denominator graph phonotactic language model.
ngram_order = 3

# Word symbol in the lexicon corresponding to silence and
# out-of-vocabulary.
sil_sym = "<SIL>"
oov_sym = "<UNK>"

# Probability to insert silence between words and at the edge of the
# utterance.
between_silprob = 0.2
edge_silprob = 0.8

# If true, imitate Kaldi and pick a pronunciation randomly for
# words with multiple pronunciations. Unless you know what you are
# doing, we recommend to leave it to false (i.e. use all
# pronunciations).
sample = false

#######################################################################
# Configuration of the TDNN.
#######################################################################
[model]

# Dropout probability after each convolutional layer.
dropout = 0.2

# The following are the standard convolution parameters. The arrays
# should be of the same size (the length of an array correspond to the
# number of convolutional layers in the TDNN).
dilations = [  1,   1,   3,   3,   3]
kernel-sizes = [  3,   3,   3,   3,   3]
hidden-dims = [384, 384, 384, 384, 384]
strides = [  1,   1,   1,   1,   3]

#######################################################################
# Options for the training.
#######################################################################
[training]
dir = "train"
epochs = 20
curriculum = 1
minibatch_size = 100
update_freq = 1
use_gpu = true

[training.scheduler]
factor = 0.5
patience = 1
threshold = 1e-4
min_learning_rate = 1e-5

[training.optimizer]
learning_rate = 1e-3
beta1 = 0.9
beta2 = 0.999

#######################################################################
# Where the output of the TDNN on the test data will be dumped.
#######################################################################
[output]

# The path is relative to the notebook directory.
dir = "output"
```
