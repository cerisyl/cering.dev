<script lang="js">
	import Meta from 'components/layout/Meta.svelte';
	import GreebleBlock from 'components/greebles/Block.svelte';
  import Action from 'components/Action.svelte'
  import data from 'src/data/resume.yaml';
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  const parseDate = date => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", year: "numeric"
    }).split(" ").join(". ").toLowerCase();
  }

  const updateDate = new Date(__BUILD_DATE__).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric"
  }).toLowerCase();

  // only display information based on display/sort
  let hash = $state(page.url.hash ? page.url.hash.split("#")[1] : "gen");
  onMount(() => {
    const updateHash = () => {hash = window.location.hash.replace("#","")};
    window.addEventListener('hashchange', updateHash);
    return () => {window.removeEventListener('hashchange', updateHash)};
  });

  const map4sort = arr => {
    return arr.flatMap(x => x.sort ? x.sort[hash] : []).filter(x => x !== undefined);
  };

  // Sort skills, experience detail based on sort/display
  let skills = data.skills;
  let experience = data.experience;
  const skillSorts = map4sort(skills);
  if (skillSorts.length > 0) {
    skills = skills.sort((a,b) => {
      const aa = a.sort ? (a.sort[hash] || 99) : 99;
      const bb = b.sort ? (b.sort[hash] || 99) : 99;
      return aa - bb;
    });
  };
  experience.forEach((xp, i) => {
    const xpSorts = map4sort(xp.detail);
    if (xpSorts.length > 0) {
      experience[i].detail = xp.detail.sort((a,b) => {
        const aa = a.sort ? (a.sort[hash] || 99) : 99;
        const bb = b.sort ? (b.sort[hash] || 99) : 99;
        return aa - bb;
      });
    };
  });

</script>

<svelte:head>
  <Meta title="resume" desc='a multidisciplinary it specialist, programmer, and designer with nearly a decade of experience'/>
</svelte:head>

<GreebleBlock text="resume"/>

<h1 class="resume-h1">Spencer Gunning</h1>
<p class="resume-sub">multidisciplinary it specialist, programmer, and designer with nearly a decade of experience.</p>
{#key hash}
  <div class="resume-top-links" id="resume-links">
    <Action link="/docs/SpencerGunning-Resume_20260920-{hash}.pdf" text="download" icon=""/>
  </div>

  <div class="resume">
    <div class="resume-l">
      <div class="resume-l-group">
        <h2 class="resume-h2">contact</h2>
        <div class="resume-l-section">
          <p><a href="https://cering.dev">cering.dev</a></p>
          <p><a class="no-bold" href="mailto:cering@cering.dev">cering@cering.dev</a></p><br/>
          <p><b>Champaign, IL</b></p>
          <p>61821</p>
        </div>
      </div>
      <div class="resume-l-group">
        <h2 class="resume-h2">skills</h2>
        {#each skills as section}
          <div class="resume-l-section">
            <h3 class="resume-h3">{section.category}</h3>
            {#each section.detail as skill}
              {@const isHidden = skill.hidden ? skill.hidden[hash] : false}
              {#if isHidden !== true}
                <p>{skill.text}</p>
                {#if skill.comment}
                  <p class="resume-comment">{skill.comment}</p>
                {/if}
              {/if}
            {/each}
          </div>
        {/each}
      </div>
      <div class="resume-updated">
        <h3 class="resume-h3">last updated</h3>
        <p>{updateDate}</p>
      </div>
    </div>

    <div class="resume-r">
      <h2 class="resume-h2">experience</h2>
      {#each experience as xp}
        {@const isHiddenXp = xp.hidden ? xp.hidden[hash] : false}
        {#if isHiddenXp !== true}
          <div class="resume-r-section">
            <div class="resume-r-section-info">
              <p class="resume-date">{parseDate(xp.dates[0])} &ndash; {xp.dates.length > 1 ? parseDate(xp.dates[1]) : "present"}</p>
              <h3 class="resume-r-h3">{xp.title}</h3>
              <p><b><i>{xp.employer} · {xp.location}</i></b></p>
            </div>
            <ul>
            {#each xp.detail as detail}
              {@const isHiddenDetail = detail.hidden ? detail.hidden[hash] : false}
              {#if isHiddenDetail !== true}
                <li>{@html detail.text}</li>
              {/if}
            {/each}
            </ul>
          </div>
        {/if}
      {/each}
      <h2 class="resume-h2">selected projects</h2>
      {#each data.projects as project}
        <div class="resume-r-section">
          <p class="resume-date">{parseDate(project.dates[0])} &ndash; {project.dates.length > 1 ? parseDate(project.dates[1]) : "present"}</p>
          <h3 class="resume-r-h3">{project.title}</h3>
          <p><a class="comment-link external" href={project.href}>{project.href}</a></p>
          <ul>
          {#each project.detail as detail}
            <li>{@html detail.text}</li>
          {/each}
          </ul>
        </div>
      {/each}
      <h2 class="resume-h2">education</h2>
      <div class="resume-r-section">
        <p class="resume-date"><i class="comment-small">sep. 2020 - may 2022</i></p>
        <div class="resume-r-section-inner">
          <h3 class="resume-r-h3">Associate Degree</h3>
          <p><b><i>Raritan Valley Community College · Branchburg, NJ</i></b></p>
          <p class="spacer0">Associate of Applied Science, Interface Design and Web Development</p>
          <p>GPA: 3.7</p>
          <ul>
            <li>President’s List &ndash; Spring 2021, Spring 2022</li>
            <li>Dean’s List &ndash; all semesters</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
{/key}