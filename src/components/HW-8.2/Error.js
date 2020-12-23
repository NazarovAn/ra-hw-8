import React from 'react'
import useJsonHook from './useJsonHook'

export default function Error() {  
  const [data, loading, error] = useJsonHook(process.env.REACT_APP_JSON_HOOK_URL, 'error');
  console.log('-----------------\n Error Component');
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  return (
    <div />
  )
}
