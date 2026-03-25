---
layout: page
title: LIGO signal identification 
accent_image: /assets/img/bgs/stars.png
permalink: /research/ligo/
description: Overview of my work improving the signal classification of the GSpyNetTree classifier for LIGO/Virgo/Kagra gravitational wave detectors.
hide_description: True
---


#### University of British Columbia -- *Supervisor: Prof. Jess McIver*
##### (May 2023 - September 2023)

The LIGO/Virgo/KAGRA (LVK) detectors are incredibly sensitve, being able to detect a change in distance between its mirrors 1/10,000th the width of a proton. As such noise mitigation is an ever present concern for detecting gravitational waves (GWs). A key problem in GW identification is distiguishing actual signals from non-gaussian, transient noise known as glitches. While humans are able to distinguish between the two, with the continuous improvement of LVK, the influx of triggers becomes too great for humans to manage alone. As such various statistical and machine learning models are employed to aide in signal classification. One of which is the convolutional neural network GSpyNetTree.

While GSpyNetTree was a generally successful classifier, it was not always consistent in distinguishing between glitches and GWs. I sought to identify weaknesses in the classifier by extracting information prior to the actual signal classification, then through dimensionality reduction methods I was able to produce clusters representing the defined classifications in the system:
<center>
<img title="Base class clustering" alt="The base clusters for the GSpyNetTree classifier." src="/assets/plots/ligo_base.png" width=600><br>
<b>Figure 1:</b> Signal clustering coloured by their known classification. All signals fed in corresponded to signal types defined in GSpyNetTree.
</center>

By then feeding the classifier glitches that were not defined in GSpyNetTree, we were able to directly identify shortcomings. My work showed that the four top offender of new glitches being put into the 'no glitch' cluster had very high frequecy morphology. With this, we could conclude that the classifier was in need of a new 'high-frequency glitch' category to effectively distinguish between different signals.
<center>
<img title="New class clustering" alt="The base clusters for the GSpyNetTree classifier." src="/assets/plots/ligo_new.png" width=550>
<img title="New class clustering" alt="Statistics of what glitches ended up in the 'no glitch' category." src="/assets/plots/ligo_stats.png" width=270><br>
<b>Figure 2:</b> Signal clustering of signals not defined in GSpyNetTree (right) and ratios of what glitches ended up in the 'no glitch' category (left); the four top offenders have high frequency morphology.
</center>