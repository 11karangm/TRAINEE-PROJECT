import React from 'react'
import {useParams} from 'react'
export default function ProfilePage() {
    let { userId } = useParams();
  return (
    <div>profile:{userId}</div>
  )
}
