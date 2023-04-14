module.exports = function RandomText(args) { 
  if(!args) return new Error('[ 🔧 ] - Parameter <args> not defined!'); 
  if(!Array.isArray(args)) return new Error('[ 🔧 ] - Parameter <args-array> not set!'); 
   
  return args[Math.floor(Math.random() * args.length)] 
}