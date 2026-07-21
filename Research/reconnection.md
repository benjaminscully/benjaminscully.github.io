---
layout: page
title: Magentic reconnection with non-uniform resistivity
accent_image: /assets/img/bgs/stars.png
permalink: /research/reconnection/
description: Description of my project simulating magnetic reconnection with link to neutron stars.
hide_description: True
---

#### University of Toronto -- *Supervisor: Prof. Bart Ripperda*
##### (May 2026 - present)

Magnetic reconnection is a mechanism in which the crossing of anti-parallel magnetic field lines converts magnetic energy into thermal and kinetic energy. In the non-relativistic regime, this process is well studied in the atmosphere of our sun. In the relativistic regime, it is thought to play a significant role in emissions around black holes and neutron stars. For neutron stars in particular, it is proposed that magnetic reconnection events may drive fast radio bursts as well as mysterious 'giant pulses' as seen from the Crab Pulsar.

Simulating magnetic reconnection has historically favoured kinetic simulations (e.g. particle-in-cell) as magnetohydrodynamic (MHD) simulations failed to produce a physically high enough rate of magnetic reconnection. However, very recently, through the implementation of [non-uniform resistivity](https://arxiv.org/abs/2601.02460v1) MHD approaches offer an accurate, less computationally expensive avenue to study magentic reconnection.

I am using the [gPLUTO](http://plutocode.ph.unito.it/pluto-gpu.html) code to examine the effects of non-uniform resistivty in environments that replicate those surrounding neutron stars. Currently this constitues using a simple "double Harris sheet' set up to crudely replicate the striped wind evironment surrounding a neutron star. Once the simulation is constructed, I will examine how traits such as current-sheet spacing, pulsar wind, and more accurate striped-wind modelling affect the rate of magentic recconection along with the emission signatures produced.  

<center>
<img title="Double Harris simulation" alt="Density and reconnection rate" src="/assets/plots/double_harris.png" width="550"><br>
<b>Figure:</b> (Extremely) preliminary simulation of the double Harris sheet. Density (top) and reconnection rate (bottom) are plotted with magnetic field lines overlayed. One can clearly see a large plasmoid formed on each current sheet.
</center>

