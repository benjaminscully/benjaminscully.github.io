---
layout: page
title: Aspherical supernovae simulation
accent_image: /assets/img/bgs/stars.png
---

#### University of Toronto -- *Supervisor: Prof. Christopher Matzner*
##### (May 2022 - September 2022)

Stripped envelope supernovae (SESNe) are thought to be able to produce relativistic ejecta due to their higher energy-to-ejected-mass ratios and more compact stellar envelopes in which radiation diffusion is suppressed, allowing for a greater degree of shock acceleration. These characteristics make them especially sensitive to non-spherical perturbations. This has the potential to lead to collisions between streams of ejecta outside of the star which could result in an additional flash of emission along with the standard light curve. However, the conditions that favour this collision (supression of radiation diffusion) disfavour observation of the flash (the diffusion of radiation). I thus sought to answer whether or not this circumstellar collision can both occur and be visible.

I used hydrodynamic simulation code to evolve an aspherical supernova in an $$n=3$$ polytrope and tracked characteristics of fluid cells near the surface of the star as they travelled into the circumstellar collision. The fiducial run is plotted below.

<center>
<img title="Evolution of the aspherical explosion" alt="Time evolution of pressure, density, velocity and entropy in aspherical explosion" src="/assets/plots/sn_image.jpeg" width=700><br>
<b>Figure 1: Time evolution of pressure, density, velocity and entropy in fiducial aspherical explosion. The four white dots in the plot represent the tracked fluid elements.</b> 
</center>
In these simulations, we tracked 'diffusion parameters' which compared the diffusivity to pressure and length scales. We sought to compare the phase where fluid elements are accelerated onto a path towards a circumstellar collision -- dubbed the acceleration phase -- to just before the collision phase. We found that our diffusion parameters increased between the acceleration phase and the collision (plotted below) implying that provided the right initial conditions a circumstellar collision can both occur and be observed.

<center>
<img title="Evolution of diffusion parameters" alt="Evolution of diffusion parameters through the explosion" src="/assets/plots/sn_analysis.jpeg" width=500><br>
<b>Figure 2:</b>  Evolution of diffusion parameters through different explosion phases. The first two vertical dashed lines represent two choices of the 'acceleration phase' and the third represents where the collision occurs.
</center>

<br>
*This work is comprehensively described in my publication on [arXiv](https://arxiv.org/abs/2307.15859) and [MNRAS](https://doi.org/10.1093/mnras/stad2360)*