import React, {useRef, useEffect, useContext} from 'react'
import {topContext} from '../../App'
import './skill.css'
import Card from './Card'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { RiReactjsFill } from 'react-icons/ri'
import { BsGit } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import {TbBrandVscode} from 'react-icons/tb'
import {DiPython} from 'react-icons/di'
import {BsFillDatabaseFill} from 'react-icons/bs'
import {SiAmazonaws} from 'react-icons/si'


const skills = ['html', 'css', 'javascript', 'reactjs', 'git', 'github','vscode','python','database','aws']
const skillsColor = ['#e34f26', '#1b73ba', '#e9ca32', '#61dafb', '#e84d31','#f2f2f2','#45a7e1','#f2d96b','#a31d23','#ea901d']

const htmlCom = function (index) {
  const html = <AiOutlineHtml5 />
  const css = <DiCss3 />
  const javascript = <SiJavascript />
  const react = <RiReactjsFill />
  const git = <BsGit />
  const github = <AiFillGithub />
  const vscode = <TbBrandVscode />
  const python = <DiPython />
  const database = <BsFillDatabaseFill />
  const aws = <SiAmazonaws />

  const skillsIcon = [html, css, javascript, react, git, github,vscode, python, database, aws]

  return skillsIcon[index]
}

function Skill() {

  const skillRef = useRef()
  const value = useContext(topContext)

  useEffect(()=> {
    value[1](state=>{
      state[0].skillTop = skillRef.current.offsetTop
      return state
    })
  },[])

  return (
    <section className='main_section shadow' id='skills' ref= {skillRef}>

      <div className='section_header'>
        <span>What i have ?</span>
        <h3>Skills</h3>
      </div>

      <div className="skills_container">
        {skills.map((skill, index) => {
          return <Card key={index} cardColor={skillsColor[index]} cardIcon={htmlCom(index)} cardName={skill} />
        })}
      </div>
    </section>
  )
}

export default Skill
