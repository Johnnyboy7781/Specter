import Image from "next/image";

import TopBubbles from "../components/TopBubbles";
import "./page.css"

export default function NewItem() {
  return (
    <div>
      <TopBubbles />
      <form>
        <div className="name-container">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="quick-facts-container">
          <div className="quick-facts-glassware">
            <input type="text" name="glassware" id="glassware" placeholder="Glassware" />
            <label htmlFor="glassware">
              <Image 
                src="/glassware.svg"
                alt="glassware"
                width={50}
                height={50}
              />
            </label>
          </div>
          <div className="quick-facts-ice">
            <input type="text" name="ice" id="ice" placeholder="Ice" />
            <label htmlFor="ice">
              <Image 
                src="/ice.svg"
                alt="ice"
                width={50}
                height={50}
              />
            </label>
          </div>
          <div className="quick-facts-garnish">
            <input type="text" name="garnish" id="garnish" placeholder="Garnish" />
            <label htmlFor="garnish">
              <Image 
                src="/garnish.svg"
                alt="garnish"
                width={50}
                height={50}
              />
            </label>
          </div>
        </div>
        <div className="description-container">
          <textarea name="description" id="description" cols={30} rows={10} placeholder="Description"></textarea>
        </div>
        <div className="components-container">
          <h2>Components</h2>
          <button>
            <Image
              src="/new.svg" 
              alt="Add new"
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className="steps-container">
          <h2>Steps</h2>
          <button>
            <Image
              src="/new.svg" 
              alt="Add new"
              width={25}
              height={25}
            />
          </button>
        </div>
      </form>
    </div>
  )
}