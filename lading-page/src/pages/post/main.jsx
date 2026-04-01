import React from "react";
import Cover from "../../components/cover/cover"
import Biography from "../../components/biography/biography"
import Skills from "../../components/skills/skills"
import Works from "../../components/works/works"
import Contact from "../../components/contact/contact";


export default function main(){

  return (
    <main>
      <Cover/>
      <Biography/>
      <Skills/>
      <Works/>
      <Contact/>
    </main>
  )
}