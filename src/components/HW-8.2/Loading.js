import React from 'react'
import useJsonHook from './useJsonHook'

export default function Loading() {  
  const [data, loading, error] = useJsonHook(process.env.REACT_APP_JSON_HOOK_URL, 'loading');
  console.log('-------------------\n Loading Component');
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  return (
    <div />
  )
}
