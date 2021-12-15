// ./client/src/components/Guitars/single/index.js
import React, { useEffect, useContext } from "react";
import GuitarContext from "./../../../context/Guitar/GuitarContext";

import { useParams } from "react-router-dom";

export default function Single() {
  const ctx = useContext(GuitarContext);
  const { singleGuitar, getGuitar } = ctx;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getGuitar(id);
  }, []);

  return (
    <>
      Página individual de guitarra
      <h1>{singleGuitar.nombre}</h1>
      <p>{singleGuitar.descripcion}</p>
      <p>{singleGuitar.precio}</p>


	  {/* <div class="bg-white">
  <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
   
    <div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
     
      <div class="lg:row-end-1 lg:col-span-4">
        <div class="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
          <img src={singleGuitar.imagen} alt="Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles." class="object-center object-cover">
        </div>
      </div>

      
      <div class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
        <div class="flex flex-col-reverse">
          <div class="mt-4">
            <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Application UI Icon Pack</h1>

            <h2 id="information-heading" class="sr-only">Product information</h2>
            <p class="text-sm text-gray-500 mt-2">Version 1.0 (Updated <time datetime="2021-06-05">June 5, 2021</time>)</p>
          </div>

         
        </div>

        <p class="text-gray-500 mt-6">The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <button type="button" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Pay $220</button>
          <button type="button" class="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Preview</button>
        </div>

        <div class="border-t border-gray-200 mt-10 pt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
          <div class="mt-4 prose prose-sm text-gray-500">
            <ul role="list">
              <li>200+ SVG icons in 3 unique styles</li>

              <li>Compatible with Figma, Sketch, and Adobe XD</li>

              <li>Drawn on 24 x 24 pixel grid</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 mt-10 pt-10">
          <h3 class="text-sm font-medium text-gray-900">License</h3>
          <p class="mt-4 text-sm text-gray-500">For personal and professional use. You cannot resell or redistribute these icons in their original or modified state. <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Read full license</a></p>
        </div>

       
      </div>

    
      </div>
    </div>
  </div> */}






	  
    </>
  );
}



  
 