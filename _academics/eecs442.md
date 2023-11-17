---
title: "Implementation and evaluation of a nested, variable-depth UNet++ model architecture for medical imaging segmentation"
collection: academics
type: "Course project, EECS 442 Computer Vision"
venue: "University of Michigan"
date: 2022-12-01
location: "Ann Arbor, MI"
---

This is the term project for the EECS 442 Computer Vision course at the University of Michigan, taught by [Prof. Andrew Owens](https://andrewowens.com).
In collaboration with Feilong Meng and Yongxiang Zhao, we implemented and evaluated the performance of a variable-depth UNet++ architecture in the context of medical imaging segmentation.

## Project Report Abstract

UNet++ essentially is an encoder-decoder network where the encoder and decoder sub-networks are connected through a series of nested, dense skip pathways, aiming at reducing the semantic gap between the feature maps of the two sub-networks.
We implemented a variation of this architecture where the code base enables the user to modify the depth of the network.
We also trained and tested different instances of this network with varying levels of depth on a dataset of retinal imaging scans, comparing their time and space complexities and training and validation accuracies, not only with one another but also with a fixed-depth baseline model.
It can be observed that as the depth in layers of the U-Net++ network increases, the time complexity of training the network increases linearly and the space complexity of the network in terms of model parameters increases exponentially; however, only marginal increases in training and validation accuracies can be gained after the model is more than four layers deep.

> Please reach out to me if you are interested in reading the full report or accessing the source code for this project.

<!-- ### [Download the report for this project](http://www-personal.umich.edu/~peijli/files/EECS_442_Final_Project.pdf)

The source code for this project can be found both in [this direct download link](http://www-personal.umich.edu/~peijli/files/unet++.ipynb) and in [this GitHub gist](https://gist.github.com/pl-mich/8fe347681e1150b8484986afc5757962).

The dataset for this project can be found in [this GitHub release page](https://github.com/pl-mich/peijli.github.io/releases/download/Lfs/Drishti-GS1-EECS442-FA22.zip). -->
