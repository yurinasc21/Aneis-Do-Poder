﻿using System;
using System.Text.Json.Serialization;

namespace ForjandoAneis.Entities
{
    public class Anel
    {

        [JsonIgnore]
        public int Id { get; set; }

        public string Nome { get; set; }
        public string Poder { get; set; }
        public string Portador { get; set; }
        public string ForjadoPor { get; set; }
        public string Imagem { get; set; }
    }
}