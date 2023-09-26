

import Navbar from './component/Navbar';
import { FiSearch } from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { useEffect, useState } from "react";
import {collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from './config/firebase';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './component/ContactCard';
//import Model from './component/Model';
import AddAndUpdateContact from './component/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { IoMdTrash } from "react-icons/io";
// import { RiEditCircleLine } from "react-icons/ri";
const App = () => {
  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} = useDisclouse();
  
 

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        const contactsSnapshot = await getDocs(contactsRef);

        const contactLists = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);

        // Now, add the onSnapshot listener to listen for real-time updates
        onSnapshot(contactsRef, (snapshot) => {
          const updatedContactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(updatedContactLists);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


 


  return(
    <>
   <div className="mx-auto max-w-[370px] px-4">
    <Navbar/>
   <div className="flex gap-1">
   <div className="flex relative items-center flex-grow">
    <FiSearch className="text-white text-3xl absolute ml-1"/>
      <input type="text"className="flex-grow  h-10 bg-transparent border-white border rounded-md text-white pl-9"/>
    </div>
    
    <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
    
   </div>
   <div className='mt-4 flex flex-col gap-3'>{
    contacts.map((contact) => (
    
    <ContactCard key={contact.id} contact={contact} />
    ))}
    </div>
   
  </div>
  <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
  <ToastContainer position="botton-center"/>
  </>
  );
};

export default App;  
