import { Separator } from '@radix-ui/react-dropdown-menu'

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className='mb-8 text-3xl font-medium tracking-wider capitalize '>
        {text}
      </h2>
      <Separator />
    </div>
  )
}

export default SectionTitle
