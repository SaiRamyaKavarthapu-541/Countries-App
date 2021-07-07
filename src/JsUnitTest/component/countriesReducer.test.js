import React from 'react';
import ACTION_TYPES from '../../actions/actionTypes';
import countriesReducer from '../../reducers/countriesReducer' ;

import { shallow } from 'enzyme';
const initialState = { 
    result: '', 
    error: false, 
  }; 
  describe('countriesReducer component', () => {
    test("renders" , ()=>{
        const wrapper = shallow(<countriesReducer />); 
    expect(wrapper.exists()).toBe(true);
  });     
      it('handles FETCH_SUCCESS',()=>{
          expect(countriesReducer(initialState,{
            type:ACTION_TYPES.FETCH_SUCCESS,
            payload:'Nepal',
           
          })).toEqual({
             ...initialState,
             result: 'Nepal', 
             
          })
      })
      it('handles FETCH_FAIL',()=>{
        expect(countriesReducer(initialState,{
            type:ACTION_TYPES.FETCH_FAIL,
           
            error: {result:false}, 
          })).toEqual({
             ...initialState,
          
             error:{result:false}, 
          })


      })   
     
   })
   
  
