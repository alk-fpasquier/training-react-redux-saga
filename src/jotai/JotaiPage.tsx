import { Counter } from "./counter/Counter";
import { useAtomsDebugValue } from 'jotai/devtools'

const DebugAtoms = () => {
    useAtomsDebugValue()
    return null
  }

export function JotaiPage() {
    return (
        <div>
            <DebugAtoms />
            <h1>Jotai</h1>
            <Counter />
        </div>
    );
}
