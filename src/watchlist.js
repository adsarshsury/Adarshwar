import React,{useState,useEffect} from 'react'
import {  SmallCloseIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { Button } from '@chakra-ui/react'
import swal from 'sweetalert';
import { Center } from '@chakra-ui/react';



const Watchlist=()=>{
  const [people, setPeople] = useState([]);

 const getpeople = ()=>{
  fetch("http://localhost:1234/cart")
  .then(Response=>Response.json())
  .then(peopleArray=>{
    setPeople(peopleArray.reverse())
  })

 }
  useEffect(()=>{
    getpeople()

  },[])


  const Deletepeople = (peopleid) => {

    axios
    .delete("http://localhost:1234/cart/" + peopleid)
    .then(Response => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("oops! Your Watchlist  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
        getpeople();
    })

  }

  return (
    <div>
     <Center
                        size='md'
                        fontSize={{
                            base: '34px',
                            md: '30px',
                            lg: '30px'
                        }}
                        color='tomato'>WatchList</Center>
      {
        people.map((people,index)=>{
          return(
            <div class = "card" key = {   index}> 
                            
                              <div className="card-title">
                              <h1>{people.name}</h1>
                              </div>
                              <div class="container">
                                <div className="card-body">
                                <p><span>Height</span>={people.height}</p>
                                <p> <span>Mass</span>={people.mass}</p>
                                <p><span>hair_color</span>={people.hair_color}</p>
                                <p> <span>skin_color</span>={people.skin_color}</p>
                                <p><span>eye_color</span>={people.eye_color}</p>
                                <p> <span>birth_year</span>={people.birth_year}</p>
                                <p> <span>gender</span>={people.gender}</p>
                                </div>
                                <div class="overlay">
                            
                                <Button colorScheme='red'  onClick={Deletepeople.bind(this, people.id)}>
                                <SmallCloseIcon    w={12} h={12}   />
                                </Button>
                               
                                </div>
                              </div>
                          
                            </div>

                          

          )
        })
      }
      
    </div>
  )
}

export default Watchlist
