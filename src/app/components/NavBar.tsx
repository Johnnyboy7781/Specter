import Image from "next/image"

export default function NavBar() {
  return (
    <nav>
        <Image 
            className="nav-image"
            alt="drinks list" 
            src="/drinks.svg"
            height={40}
            width={40}
        />
        <div className="nav-center">
            <Image 
                className="nav-image"
                alt="drinks list" 
                src="/new.svg"
                height={40}
                width={40}
            />
        </div>
        <Image 
            className="nav-image"
            alt="ingredients list" 
            src="/ingredients.svg"
            height={40}
            width={40}
        />
    </nav>
  )
}