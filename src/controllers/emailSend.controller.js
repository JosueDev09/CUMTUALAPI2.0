import { getConnection } from "../database/conexion.js";
import {senEmailVerify} from "../helpers/emailHelper.js";


export const saveLead = async (req,res) =>
{ 
 try{
   const  {strFullName,
    strEmail,
    intTipoServ,
    intBuisness,
    strPhone,
    strScheduleContact,
    strProjectDescription} = req.body;

    console.log("These varibles send my front",req.body);

//These parameter send to store procedure
    const parameters=[strFullName,
        strEmail,
        intTipoServ,
        intBuisness,
        strPhone,
        strScheduleContact,
        strProjectDescription
    ]

    console.log("Parameters",parameters);

    try{
         //Conection to bd
    const connection = await getConnection();
    //Execute the store procedure 
     const [results] = await connection.execute('CALL sp_tbSaveLeads(?, ?, ?, ?, ?, ?, ?)',parameters);

      // Send validate email
      await senEmailVerify(strEmail, strFullName,);
      return res.status(200).json({ message: 'Lead save' });
    }catch(error){
        console.log("Can't conection to store procedure");
    }
    
 }  catch{

 } 
}
