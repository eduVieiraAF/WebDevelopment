import Navigator from "@/components/Navigator"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',
      fontFamily: 'cursive',
    }}>
      <Navigator dest="/sample" text="sample"></Navigator>
      <Navigator dest="/charms" text="charms"></Navigator>
      <Navigator dest="/jsx" text="jsx" color="crimson"></Navigator>
      </div>
  )
}