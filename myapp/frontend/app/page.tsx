import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <p>test16:57</p>
      <div className="m-10 text-center">
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
