import React,{useState,useEffect  } from 'react'
import {Center} from '@chakra-ui/react'

const Details=()=>{
  const [people, setPeople] = useState([]);
  const getpeople = ()=>{
    fetch("http://localhost:1234/cartinfo")
    .then(Response=>Response.json())
    .then(peopleArray=>{
      setPeople(peopleArray.reverse())
    })
  
   }
    useEffect(()=>{
      getpeople()
  
    },[])
  return (
    <div>
      <Center
                        size='md'
                        fontSize={{
                            base: '34px',
                            md: '30px',
                            lg: '30px'
                        }}
                        color='tomato'>Details</Center>
    {
                        people.map((people, index) => {
                            return (
                            <>
                             <div class = "card" key = {   index}> 
                            
                              <div className="card-title">
                                <Center>
                                    <h1>{people.name}</h1>
                                </Center>
                            </div>
                            <div className="card-body">
                            
                                <p><span>Height</span>={people.height}</p>
                                <p> <span>Mass</span>={people.mass}</p>
                                <p><span>hair_color</span>={people.hair_color}</p>
                                <p> <span>skin_color</span>={people.skin_color}</p>
                                <p><span>eye_color</span>={people.eye_color}</p>
                                <p> <span>birth_year</span>={people.birth_year}</p>
                                <p> <span>gender</span>={people.gender}</p>
                                

                               
                               
                            </div>
                            
                        </div>
                    </>
                        )

                    })

                }
    </div>
  )
}

export default Details;
