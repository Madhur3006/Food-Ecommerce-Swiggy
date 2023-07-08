import React, {useState} from 'react';

const Section = ({name, description, isVisible, setIsVisible}) => {
    return (
        <div className = "border border-black">
            <h2>{name}</h2>
            {isVisible ? 
            <button onClick = {() => setIsVisible(false)}>Hide</button>
            : 
            <button onClick = {() => setIsVisible(true)}>Show</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Grocery = () => {

    const [visibleSection, setVisibleSection] = useState('about')

    return (
        <>
            <Section name = {'About'} description = {'This a about section'} isVisible = {visibleSection==='about'} setIsVisible = {() => setVisibleSection('about')}/>
            <Section name = {'Team'} description = {'This a Team section'} isVisible = {visibleSection==='team'} setIsVisible = {() => setVisibleSection('team')}/>
            <Section name = {'Careers'} description = {'This a career section'} isVisible = {visibleSection==='career'} setIsVisible = {() => setVisibleSection('career')}/>
            <Section name = {'Products'} description = {'This a product section'} isVisible = {visibleSection==='product'} setIsVisible = {() => setVisibleSection('product')}/>  
        </>
      );
}
 
export default Grocery;