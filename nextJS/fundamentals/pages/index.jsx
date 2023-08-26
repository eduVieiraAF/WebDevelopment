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
      <Navigator dest="/navigation" text="nav 01" color="crimson"></Navigator>
      <Navigator dest="/client/br-2/123" text="nav 02" color="crimson"></Navigator>
      <Navigator dest="/state" text="State"></Navigator>
      <Navigator dest="/integration_1" text="Integration"></Navigator>
      <Navigator dest="/static" text="Static context"></Navigator>
    </div>
  )
}