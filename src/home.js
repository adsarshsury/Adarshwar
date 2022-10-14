import React, {useState, useEffect} from 'react'
import {Flex, Spacer} from '@chakra-ui/react'
import {Center} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import {  AddIcon } from '@chakra-ui/icons'
import {  InfoOutlineIcon } from '@chakra-ui/icons'
import axios from 'axios'
import swal from 'sweetalert';

const Home = () => {

    const [people, setPeople] = useState([]);
    const [Search, setSearch] = useState()

    useEffect(() => {

        async function fetchPeople() {
            let res = await fetch(`https://swapi.dev/api/people?q=${Search}format=json`)
            let data = await res.json()
            setPeople(data.results)
        }

        fetchPeople()

    }, [Search])


    


    const [msg, updatemsg] = useState("");

    const addtocart = (peopleinfo) => {
      axios.post("  http://localhost:1234/cart", peopleinfo)
      .then(Response => {
        swal("Starwar!", "You Watchlist added ! success", "success");
    })
  }


  
  const addtocartinfo = (peopleinfo) => {
    axios
        .post("  http://localhost:1234/cartinfo", peopleinfo)
        .then(Response => {
          swal("See details!", "You can see all information next details page ! Thankyou", "success");
        })
}
    return (
        <div>
            <Flex class='flx'>
                <div p='2'>
                    <Center
                        size='md'
                        fontSize={{
                            base: '34px',
                            md: '30px',
                            lg: '30px'
                        }}
                        color='tomato'>Start War List</Center>
                </div>
                <Spacer/>
                <Center gap='2'>
                    <Input
                     type={Search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder="Search.."
                     color='tomato'
                        />

                </Center>

            </Flex>
            <section class="box">
           
                <div class="box2">

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
                                <div direction='row' p='3'>
                               <div>
                               <Button colorScheme='teal' variant='solid' onClick={addtocart.bind(this, people)}>
                                
                                               <AddIcon color='red.500'   w={5} h={5}/>Add to favorite
                                              </Button>
                               </div>
                                              <Button colorScheme='yellow'  onClick={addtocartinfo.bind(this, people)}>
                                             < InfoOutlineIcon  color='green.500'  w={5} h={5}/> Info
                                              </Button>
                                 
                                </div>

                               
                               
                            </div>
                            
                        </div>
                    </>
                        )

                    })

                }
                

                </div>
                
            </section>

        </div>

    )
}

export default Home
