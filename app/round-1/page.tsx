"use client"

import TimelineModal from "@/components/TimerModal"

const page = () => {
  return (
    <main>
      <section>
        <TimelineModal isOpen={true} onClose={() => console.log("hello")} />
      </section>
      <section>
        <span>Questions</span>
      </section>
      <section></section>
    </main>
  )
}

export default page