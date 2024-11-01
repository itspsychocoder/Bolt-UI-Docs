import FoundingMember from '@/components/FoundingMember'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen w-full'>
        <h1 className='text-white text-center font-bold text-3xl my-5 '>Core Members</h1>

      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>


      <FoundingMember name={"Psycho"} linkedin={"https://linkedin.com/in/hussnain-ahmad/"} github={"https://github.com/Hussnainahmad1606"}/>


      <FoundingMember name={"Psycho 2"} linkedin={"https://linkedin.com/in/hussnain-ahmad/"} github={"https://github.com/Hussnainahmad1606"}/>


      <FoundingMember name={"Psycho 3"} linkedin={"https://linkedin.com/in/hussnain-ahmad/"} github={"https://github.com/Hussnainahmad1606"}/>

      </div>
    </div>
  )
}

export default page