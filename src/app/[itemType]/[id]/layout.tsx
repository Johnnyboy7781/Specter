import TopBubbles from "../components/TopBubbles";

export default function ItemLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div>
        <TopBubbles />
        {children}
    </div>
  )
}  