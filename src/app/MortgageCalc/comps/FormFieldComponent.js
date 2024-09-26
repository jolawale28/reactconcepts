export default function FormFieldComponent({label, value, setValue}) {

    return (
        <div className={'pb-2'}>
            <label className={'pr-2'}>{label}</label>
            <input className={'rounded text-amber-950'} type={'number'} value={value} onChange={(e) => setValue(e.target.value)}/>

        </div>
    )
}