const Page1 = () => (
    <div className='w-full h-full bg-lime-500'>

    </div>
)

const Page2 = () => (
    <div className='w-full h-full bg-red-500'>

    </div>
)

const Page3 = () => (
    <div className='w-full h-full bg-green-500'>

    </div>
)

const Page4 = () => (
    <div className='w-full h-full bg-yellow-500'>

    </div>
)

const Page5 = () => (
    <div className='w-full h-full bg-gray-500'>

    </div>
)

const pages: JSX.Element[] = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
]

export { pages }
