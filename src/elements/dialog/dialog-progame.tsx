'use client'

import { useState, useEffect } from 'react'

export function DialogProgame() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      {isOpen && (
        <div className="animate-fade fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/90"
            onClick={() => setIsOpen(false)}
          />
          <dialog
            className="relative z-50 max-w-xl rounded-lg bg-zinc-900 p-4 shadow-md"
            open
          >
            <div>
              <h2 className="text-white">Are you absolutely sure?</h2>
              <p className="text-white">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
              <button
                className="rounded bg-primary px-4 py-2 text-white"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  )
}
